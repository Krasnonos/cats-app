import { Component } from 'react';
import { MainContentNav } from '../MainContentNav/MainContentNav';
import { BreedsForm } from '../BreedsForm/BreedsForm';
import { Gallery } from '../GridGallery/GridGallery';
import { Loader } from '../Loader/Loader';
import { Api } from '../../utils/apiService';
import { SortImg } from '../../utils/sortImages';
import { Wrap, FlexContainer } from './BreedsSection.styled';

const API = new Api();

export class BreedSection extends Component {
  state = {
    breedId: null,
    limit: 5,
    page: 0,
    sort: 1,
    images: [],
    loading: false,
  };
  componentWillUnmount() {
    this.setState({ breedId: null, limit: 5, page: 0, sort: 1, images: [] });
  }

  async componentDidUpdate(_, prevState) {
    const { limit, breedId, page, images, sort } = this.state;

    try {
      if (prevState.breedId !== breedId) {
        this.setState({ loading: true });
        const foundedCats = await API.getCatsByBreedsFilter(
          limit,
          breedId,
          page
        );

        this.setState(({ images }) => {
          return { images: [...images, ...foundedCats], loading: false };
        });
      }

      if (prevState.sort !== sort) {
        if (images.length === 0) {
          return;
        }
        const sortedImg = await SortImg(images, sort);
        this.setState({ images: sortedImg });
      }
    } catch (error) {
      console.log(error);
    }
  }

  changeForm = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });

    if (name === 'breedId' || name === 'limit') {
      const listParent = e.currentTarget.closest('.listPerent');
      const firstEl = listParent.querySelector('.FirstItem');
      firstEl.innerHTML = e.target.textContent;
    }
  };

  showCatInfo = id => {
    this.props.createCatFullInfo(id, this.state.images);
  };

  render() {
    const { images, loading } = this.state;

    return (
      <Wrap>
        <FlexContainer>
          <MainContentNav currentPage={'breeds'} />
          <BreedsForm changeForm={this.changeForm} />
        </FlexContainer>
        {loading && <Loader />}
        {images && <Gallery images={images} showCatInfo={this.showCatInfo} />}
      </Wrap>
    );
  }
}
