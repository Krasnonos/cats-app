import { Component } from 'react';
import svg from '../../image/icons.svg';
import {
  Item,
  CardImg,
  BtnOverlay,
  ImgBtn,
  BtnSvg,
} from './GallerySectionGrid.styled';
import { Api } from '../../utils/apiService';
const API = new Api();

export class GallerySectionGridItem extends Component {
  addOrRemoveCard = async id => {
    try {
      const favoriteCats = await API.getFavoritesCats();
      const isFavorite = favoriteCats.find(({ image_id }) => image_id === id);

      if (isFavorite) {
        API.delateFavorite(isFavorite.id);
      } else {
        API.addCatToFavorite({ image_id: id });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { cat } = this.props;

    return (
      <Item>
        <CardImg src={cat.url} alt={cat.id} />
        <BtnOverlay>
          <ImgBtn type="button" onClick={() => this.addOrRemoveCard(cat.id)}>
            <BtnSvg width="20" height="20">
              <use href={`${svg}#icon-fav`}></use>
            </BtnSvg>
          </ImgBtn>
        </BtnOverlay>
      </Item>
    );
  }
}
