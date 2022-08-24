import React, { Component } from 'react';
import svg from '../../image/icons.svg';
import { FormWrap, SearchInput, SubmitBtn } from './SearchingInput.styled';

export class SearchingInput extends Component {
  state = {
    queryValue: '',
  };

  changeQuery = e => {
    this.setState({ queryValue: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();

    this.props.submit(this.state.queryValue);
    this.setState({ queryValue: '' });
  };

  render() {
    return (
      <>
        <FormWrap onSubmit={this.submitForm}>
          <SearchInput
            type="text"
            value={this.state.queryValue}
            name="queryValue"
            placeholder="Search for breeds by name"
            onChange={this.changeQuery}
          />
          <SubmitBtn type="submit">
            <svg width="24" height="24">
              <use href={svg + '#icon-search'}></use>
            </svg>
          </SubmitBtn>
        </FormWrap>
      </>
    );
  }
}
