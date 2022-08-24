import { format } from 'date-fns';
import React, { Component } from 'react';
import svg from '../../image/icons.svg';
import {
  ListItem,
  Time,
  Text,
  ActionId,
  ActionSvg,
} from './ActionHistoryListItem.styled';

export class ActionHistoryListItem extends Component {
  choseVote = vote => {
    if (vote === 1) {
      return 'Likes';
    }
    if (vote === 0) {
      return 'Dislikes';
    } else {
      return 'Favorites';
    }
  };
  choseIcon = vote => {
    if (vote === 1) {
      return `${svg}#icon-likeGreen`;
    }
    if (vote === 0) {
      return `${svg}#icon-dislikeYellow`;
    } else {
      return `${svg}#icon-favRedS`;
    }
  };

  render() {
    const {
      action: { id, time, vote },
      remove,
    } = this.props;

    return (
      <ListItem>
        <Time>{format(time, 'HH:mm')}</Time>
        <Text>
          Image ID: <ActionId>{id}</ActionId>{' '}
          {remove ? 'was removed from ' : 'was added to '}
          {this.choseVote(vote)}
        </Text>
        {!remove && (
          <ActionSvg width="20" height="20">
            <use href={this.choseIcon(vote)}></use>
          </ActionSvg>
        )}
      </ListItem>
    );
  }
}
