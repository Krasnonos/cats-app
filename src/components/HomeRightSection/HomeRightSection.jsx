import React, { Component } from 'react';
import homeImg from '../../image/home.png';
import { Background, BgImg } from './HomeRightSection.styled';

export class HomeRightSection extends Component {
  render() {
    return (
      <Background>
        <BgImg src={homeImg} alt="man and cat" />
      </Background>
    );
  }
}
