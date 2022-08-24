import { Component } from 'react';
import svg from '../../image/icons.svg';
import {
  Item,
  CardImg,
  BtnOverlay,
  ImgBtn,
  BtnSvg,
} from './VotedGalleryItem.styled';

export class VotedGalleryItem extends Component {
  render() {
    const { cat, removeCatFromVoted } = this.props;

    return (
      <Item>
        <CardImg src={cat.catImages.url} alt={cat.catImages.id} />
        <BtnOverlay>
          <ImgBtn
            type="button "
            onClick={() => removeCatFromVoted(cat, cat.votingCats.value)}
          >
            <BtnSvg width="20" height="20">
              <use href={`${svg}#${'icon-favRed'}`}></use>
            </BtnSvg>
          </ImgBtn>
        </BtnOverlay>
      </Item>
    );
  }
}
