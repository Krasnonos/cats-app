import React, { Component } from 'react';
import { Wrap } from './VotingSection.styled';
import { MainContentNav } from '../MainContentNav/MainContentNav';
import { RandomCatForVote } from '../RandomCatForVote/RandomCatForVote';

export class VotingSection extends Component {
  render() {
    return (
      <Wrap>
        <MainContentNav currentPage={'voting'} />
        <RandomCatForVote />
      </Wrap>
    );
  }
}
