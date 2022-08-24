import { Component } from 'react';
import { Api } from '../../utils/apiService';
import {
  MainList,
  BreedsItem,
  LimitItem,
  SubMenu,
  SubMenuBtn,
  SortBtn,
} from './BreedsForm.styled';
import svg from '../../image/icons.svg';
const API = new Api();

export class BreedsForm extends Component {
  state = {
    breeds: [],
  };

  async componentDidMount() {
    try {
      const breedsAllinfo = await API.getBreeds();
      const breedsIdAndName = breedsAllinfo.map(({ id, name }) => ({
        id,
        name,
      }));
      this.setState({ breeds: breedsIdAndName });
    } catch (error) {
      console.log(error);
    }
  }

  getBreedsHtml = (id, name) => {
    return (
      <li key={id}>
        <SubMenuBtn
          type="button"
          onClick={this.props.changeForm}
          name="breedId"
          value={id}
        >
          {name}
        </SubMenuBtn>
      </li>
    );
  };

  render() {
    const { breeds } = this.state;
    return (
      <MainList>
        <BreedsItem className="listPerent">
          <p className="FirstItem">All breeds</p>
          <svg height="12" width="12">
            <use href={svg + '#icon-back'}></use>
          </svg>
          <SubMenu>
            {breeds.map(({ id, name }) => this.getBreedsHtml(id, name))}
          </SubMenu>
        </BreedsItem>
        <LimitItem className="listPerent">
          <p className="FirstItem">Limit</p>
          <svg height="12" width="12">
            <use href={svg + '#icon-back'}></use>
          </svg>
          <SubMenu>
            <li>
              <SubMenuBtn
                type="button"
                onClick={this.props.changeForm}
                name="limit"
                value="5"
              >
                Limit: 5
              </SubMenuBtn>
            </li>
            <li>
              <SubMenuBtn
                type="button"
                onClick={this.props.changeForm}
                name="limit"
                value="10"
              >
                Limit: 10
              </SubMenuBtn>
            </li>
            <li>
              <SubMenuBtn
                type="button"
                onClick={this.props.changeForm}
                name="limit"
                value="15"
              >
                Limit: 15
              </SubMenuBtn>
            </li>
            <li>
              <SubMenuBtn
                type="button"
                onClick={this.props.changeForm}
                name="limit"
                value="20"
              >
                Limit: 20
              </SubMenuBtn>
            </li>
          </SubMenu>
        </LimitItem>
        <SortBtn
          type="button"
          onClick={this.props.changeForm}
          name="sort"
          value="0"
        >
          <svg height="21">
            <use href={svg + '#icon-sort'}></use>
          </svg>
        </SortBtn>
        <SortBtn
          type="button"
          onClick={this.props.changeForm}
          name="sort"
          value="1"
        >
          <svg height="21">
            <use href={svg + '#icon-sortReverse'}></use>
          </svg>
        </SortBtn>
      </MainList>
    );
  }
}
