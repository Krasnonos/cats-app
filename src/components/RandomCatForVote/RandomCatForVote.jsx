import React, { Component } from 'react';
import { VoteBtns } from '../VoteBtns/VoteBtns';
import { Loader } from '../Loader/Loader';
import { ActionHistoryList } from '../ActionHistoryList/ActionHistoryList';
import { ImgWrap, VoteCatImg, RelativeWrap } from './RandomCatForVote.styled';
import { Api } from '../../utils/apiService';

const API = new Api();

export class RandomCatForVote extends Component {
  state = {
    randomCat: '',
    actions: [],
    loading: false,
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const randomCat = await API.getRandomCat();
      this.setState({ randomCat: randomCat[0] });
    } catch (error) {
      console.log(error);
    }
    this.setState({ loading: false });
  }

  voteForCat = async (id, vote) => {
    try {
      const randomCat = await API.getRandomCat();
      this.setState({ randomCat: randomCat[0] });

      if (vote === 1 || vote === 0) {
        await API.voting({ image_id: id, value: vote });
      } else {
        API.addCatToFavorite({ image_id: id });
      }
    } catch (error) {
      console.log(error);
    }
    this.addActions(id, vote);
  };

  addActions = (id, vote) => {
    this.setState(prevState => {
      return {
        actions: [
          ...prevState.actions,
          {
            id,
            vote,
            time: Date.now(),
          },
        ],
      };
    });
  };

  render() {
    const { randomCat, actions, loading } = this.state;

    return (
      <>
        <RelativeWrap>
          {loading && <Loader />}
          <ImgWrap>
            <VoteCatImg src={randomCat.url} alt={'cat' + randomCat.id} />
          </ImgWrap>
          <VoteBtns onVote={this.voteForCat} id={randomCat.id} />
        </RelativeWrap>
        {actions && <ActionHistoryList actions={actions} />}
      </>
    );
  }
}
