import React, { Component } from 'react';
import { HeadWrap } from './MainRightSection.styled';
import { SearchingInput } from '../SearchingInput/SearchingInput';
import { NavFavoriteCat } from '../NavFavoriteCat/NavFavoriteCat';
import { VotingSection } from '../VotingSection/VotingSection';
import { BreedSection } from '../BreedsSection/BreedsSection';
import { GallerySection } from '../GallerySection/GallerySection';
import { SearchedBreeds } from '../SearchedBreeds/SearchedBreeds';
import { FullCatsInfo } from '../FullCatsInfo/FullCatsInfo';
import { VotedGallery } from '../VotedGallery/VotedGallery';
import { Api } from '../../utils/apiService';
const API = new Api();

export class MainRightSection extends Component {
  state = {
    findCat: '',
    images: [],
    fullCatInfo: null,
    votingCats: null,
    votingPage: null,
  };

  componentDidMount() {
    this.setState({
      images: [],
      findCat: '',
      fullCatInfo: null,
      votingPage: null,
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    const { findCat } = this.state;

    if (prevProps.page !== this.props.page) {
      this.setState({
        findCat: '',
        images: [],
        fullCatInfo: null,
        votingCats: null,
        votingPage: null,
      });
    }
    try {
      if (prevState.findCat !== findCat) {
        const breedIds = await API.getBreeds();
        const searchBreedId = breedIds.find(
          ({ name }) => name.toLowerCase() === this.state.findCat.toLowerCase()
        );

        if (searchBreedId) {
          const searchedCats = await API.searchCatsByBreeds(searchBreedId.id);
          this.setState({ images: searchedCats });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  searchCat = searchQuery => {
    this.setState({
      findCat: searchQuery,
      fullCatInfo: null,
      votingPage: null,
    });
  };

  createCatFullInfo = (id, state = this.state.images) => {
    const catsFromState = state.filter(cat => cat.breeds[0].id === id);
    const imagesObj = catsFromState
      .map(image => ({
        image: image.url,
        img_id: image.id,
      }))
      .splice(0, 5);

    const fullInformation = {
      imagesObj,
      name: catsFromState[0].breeds[0].name,
      origin: catsFromState[0].breeds[0].origin,
      life_span: catsFromState[0].breeds[0].life_span,
      temperament: catsFromState[0].breeds[0].temperament,
      weight: catsFromState[0].breeds[0].weight.metric,
      description: catsFromState[0].breeds[0].description,
      id: catsFromState[0].breeds[0].id,
    };
    this.setState({ fullCatInfo: fullInformation });
  };

  showVotedCats = voteSelected => {
    this.setState({ votingPage: voteSelected, images: [] });
  };

  render() {
    const { page } = this.props;
    const { images, findCat, fullCatInfo, votingPage } = this.state;

    return (
      <div>
        <HeadWrap>
          <SearchingInput submit={this.searchCat} />
          <NavFavoriteCat showVotedCats={this.showVotedCats} />
        </HeadWrap>

        {page === 'voting' && images.length === 0 && !votingPage && (
          <VotingSection />
        )}

        {page === 'breeds' &&
          images.length === 0 &&
          !fullCatInfo &&
          !votingPage && (
            <BreedSection createCatFullInfo={this.createCatFullInfo} />
          )}

        {page === 'gallery' &&
          images.length === 0 &&
          !fullCatInfo &&
          !votingPage && <GallerySection />}

        {images.length !== 0 && !fullCatInfo && (
          <SearchedBreeds
            images={images}
            breed={findCat}
            createCatFullInfo={this.createCatFullInfo}
          />
        )}

        {fullCatInfo && <FullCatsInfo catsInfo={fullCatInfo} page={'search'} />}

        {votingPage && <VotedGallery page={votingPage} />}
      </div>
    );
  }
}
