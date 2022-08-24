import React, { Component } from 'react';
import { NavList } from './NavFavoriteCat.styled';
import { IconBtn } from '../IconBtn/IconBtn.jsx';

export class NavFavoriteCat extends Component {
  render() {
    return (
      <NavList>
        <IconBtn
          icon={'icon-likeRed'}
          showVotedCats={() => this.props.showVotedCats('likes')}
        />
        <IconBtn
          icon={'icon-favL'}
          showVotedCats={() => this.props.showVotedCats('favorites')}
        />
        <IconBtn
          icon={'icon-dislikeRedL'}
          showVotedCats={() => this.props.showVotedCats('dislikes')}
        />
      </NavList>
    );
  }
}
