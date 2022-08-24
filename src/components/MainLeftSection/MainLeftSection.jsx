import React, { Component } from 'react';
import svg from '../../image/icons.svg';
import voting from '../../image/voting.png';
import breeds from '../../image/breeds.png';
import gallery from '../../image/gallery.png';

import {
  Header,
  LogoBtn,
  LogoText,
  TitleWrap,
  HeroTitle,
  HeroWelcome,
  HeroStart,
  PagesList,
  LeftBar,
} from './MainLeftSection.styled';
import { NavButton } from '../NavButton/NavButton';

export class MainLeftSection extends Component {
  render() {
    return (
      <LeftBar>
        <Header>
          <LogoBtn onClick={() => this.props.changePage('home')}>
            <svg width="24" height="24">
              <use href={svg + '#icon-Logo'}></use>
            </svg>{' '}
            <LogoText width="72" height="13">
              <use href={svg + '#icon-PetsPaw'}></use>
            </LogoText>{' '}
          </LogoBtn>
          <input
            type="checkbox"
            id="toggle"
            className="toggle--checkbox"
            onClick={this.props.changeTheme}
          />
          <label htmlFor="toggle" className="toggle--label">
            <span className="toggle--label-background"></span>
          </label>
        </Header>
        <div>
          <TitleWrap>
            <HeroTitle>Hello!</HeroTitle>
            <HeroWelcome>Welcome to cat house</HeroWelcome>
          </TitleWrap>
          <HeroStart>Try to use our application</HeroStart>
          <PagesList>
            <NavButton
              img={voting}
              color={'#B4B7FF'}
              text={'voting'}
              changePage={this.props.changePage}
              currentPage={this.props.currentPage}
            />
            <NavButton
              img={breeds}
              color={'#97EAB9'}
              text={'breeds'}
              changePage={this.props.changePage}
              currentPage={this.props.currentPage}
            />
            <NavButton
              img={gallery}
              color={'#FFD280'}
              text={'gallery'}
              changePage={this.props.changePage}
              currentPage={this.props.currentPage}
            />
          </PagesList>
        </div>
      </LeftBar>
    );
  }
}
