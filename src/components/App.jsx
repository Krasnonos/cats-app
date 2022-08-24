import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { Container } from './Container';
import { MainLeftSection } from './MainLeftSection/MainLeftSection';
import { HomeRightSection } from './HomeRightSection/HomeRightSection';
import { MainRightSection } from './MainRightSection/MainRightSection';

export class App extends Component {
  state = {
    currentPage: 'home',
    currentTheme: {
      colors: {
        hoverBgBtn: '#FBE0DC',
        hoverTextBtn: '#FF868E',
        mainBgBtn: '#FFFFFF',
        mainTextBtn: '#FF868E',
        activeBgBtn: '#FF868E',
        activeTextBtn: '#FFFFFF',
        mainBg: '#F8F8F7',
        secondBg: '#FBE0DC',
        boldText: '#1D1D1D',
        regularText: '#8C8C8C',
        greenBg: '#97EAB9',
        pinkBg: '#FF868E',
        yellowBg: '#FFD280',
        mutedGreen: '#97EAB94D',
        mutedPink: '#FF868E4D',
        mutedYellow: '#FFD2804D',
        modal: '#FFFFFF',
        modalSvg: '#F8F8F7',
        homeRect: ' #FBE0DC',
      },
    },
  };

  changePage = value => {
    if (this.state.currentPage === value) {
      return;
    }
    this.setState({ currentPage: value });
  };

  changeTheme = e => {
    if (e.target.checked) {
      this.setState({
        currentTheme: {
          colors: {
            hoverBgBtn: '#FBE0DC',
            hoverTextBtn: '#FF868E',
            mainBgBtn: '#292929',
            mainTextBtn: '#FF868E',
            activeBgBtn: '#FF868E',
            activeTextBtn: '#FFFFFF',
            mainBg: '#1D1D1D',
            secondBg: 'rgba(255, 134, 142, 0.2)',
            boldText: '#FFFFFF',
            regularText: '#8C8C8C',
            greenBg: '#97EAB9',
            pinkBg: '#FF868E',
            yellowBg: '#FFD280',
            mutedGreen: '#97EAB94D',
            mutedPink: '#FF868E4D',
            mutedYellow: '#FFD2804D',
            modal: '#2c2c2c',
            modalSvg: 'rgba(255, 255, 255, 0.05)',
            homeRect: ' rgba(255, 255, 255, 0.05)',
          },
        },
      });
    } else {
      this.setState({
        currentTheme: {
          colors: {
            hoverBgBtn: '#FBE0DC',
            hoverTextBtn: '#FF868E',
            mainBgBtn: '#FFFFFF',
            mainTextBtn: '#FF868E',
            activeBgBtn: '#FF868E',
            activeTextBtn: '#FFFFFF',
            mainBg: '#F8F8F7',
            secondBg: '#FBE0DC',
            boldText: '#1D1D1D',
            regularText: '#8C8C8C',
            greenBg: '#97EAB9',
            pinkBg: '#FF868E',
            yellowBg: '#FFD280',
            mutedGreen: '#97EAB94D',
            mutedPink: '#FF868E4D',
            mutedYellow: '#FFD2804D',
            modal: '#FFFFFF',
            modalSvg: '#F8F8F7',
            homeRect: ' #FBE0DC',
          },
        },
      });
    }
  };

  render() {
    const { currentPage, currentTheme } = this.state;

    return (
      <ThemeProvider theme={{ ...theme, ...currentTheme }}>
        <Container>
          <MainLeftSection
            changePage={this.changePage}
            changeTheme={this.changeTheme}
            currentPage={currentPage}
          />
          {currentPage === 'home' ? (
            <HomeRightSection />
          ) : (
            <MainRightSection page={currentPage} />
          )}
        </Container>
      </ThemeProvider>
    );
  }
}
