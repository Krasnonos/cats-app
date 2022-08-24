import { Component } from 'react';
import { MainContentNav } from '../MainContentNav/MainContentNav';
import { GalleryForm } from '../GalleryForm/GalleryForm';
import { GallerySectionGridItem } from '../GallerySectionGridItem/GallerySectionGridItem';
import { Loader } from '../Loader/Loader';
import { Modal } from '..//Modal/Modal';
import { Wrap, ErrorMsg, List } from './GallerySection.styled';
import { Api } from '../../utils/apiService';
const API = new Api();

export class GallerySection extends Component {
  state = {
    images: [],
    isShowModal: false,
    loading: false,
  };

  submitForm = async (order, type, breed, limit) => {
    try {
      this.setState({ loading: true, images: [] });
      const res = await API.getCatsForGallery(order, type, breed, limit);
      this.setState({ images: res, loading: false });
    } catch (error) {
      console.log(error);
    }
  };

  toggleModal = () => {
    this.setState(prevState => {
      return {
        isShowModal: !prevState.isShowModal,
      };
    });
  };

  render() {
    const { images, isShowModal, loading } = this.state;
    return (
      <>
        <Wrap>
          <MainContentNav
            currentPage={'gallery'}
            isUpload={true}
            openModal={this.toggleModal}
          />
          <GalleryForm submitForm={this.submitForm} />
          {images?.length === 0 && <ErrorMsg>No item found</ErrorMsg>}
          {loading && <Loader />}
          {images && (
            <List>
              {images.map(cat => (
                <GallerySectionGridItem cat={cat} key={cat.id} />
              ))}
            </List>
          )}
        </Wrap>
        {isShowModal && <Modal closeModal={this.toggleModal} />}
      </>
    );
  }
}
