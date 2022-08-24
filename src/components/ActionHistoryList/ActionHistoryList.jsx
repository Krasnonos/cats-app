import React, { Component } from 'react';
import { ActionHistoryListItem } from '../ActionHistoryListItem/ActionHistoryListItem';
import { ListWrap } from './ActionHistoryList.styled';

export class ActionHistoryList extends Component {
  render() {
    const { actions, remove } = this.props;

    return (
      <ListWrap>
        {actions.map(action => (
          <ActionHistoryListItem
            action={action}
            key={action.id}
            remove={remove}
          />
        ))}
      </ListWrap>
    );
  }
}
