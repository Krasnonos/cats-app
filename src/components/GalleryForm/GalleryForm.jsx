import { Component } from 'react';
import { Api } from '../../utils/apiService';
import {
  MainList,
  MenuFlexWrap,
  OptionLabel,
  OpeningOption,
  Menu,
  LimitMenu,
  SubMenu,
  SubMenuBtn,
  SubmitBtn,
  BtnSvg,
} from './GalleryForm.styled';
import svg from '../../image/icons.svg';
const API = new Api();

export class GalleryForm extends Component {
  state = {
    breeds: [],
    order: 'rand',
    type: 'jpg,png',
    breed: 'none',
    limit: 5,
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
          onClick={this.changeFirstOption}
          name="breed"
          value={id}
        >
          {name}
        </SubMenuBtn>
      </li>
    );
  };

  changeFirstOption = e => {
    const listParent = e.target.closest('.listPerent');
    const firstEl = listParent.querySelector('.FirstItem');
    firstEl.innerHTML = e.target.textContent;

    this.changeState(e);
  };

  changeState = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmit = () => {
    const order = this.state.order;
    const breed = this.state.breed;
    const limit = this.state.limit;
    const type = this.state.type;

    this.props.submitForm(order, type, breed, limit);
  };

  render() {
    const { breeds } = this.state;
    return (
      <MainList>
        <MenuFlexWrap>
          <OptionLabel>order</OptionLabel>
          <Menu className="listPerent">
            <OpeningOption className="FirstItem">Random</OpeningOption>
            <svg height="12" width="12">
              <use href={svg + '#icon-back'}></use>
            </svg>
            <SubMenu>
              <li>
                <SubMenuBtn
                  type="button"
                  onClick={this.changeFirstOption}
                  name="order"
                  value="rand"
                >
                  Random
                </SubMenuBtn>
              </li>
              <li>
                <SubMenuBtn
                  type="button"
                  onClick={this.changeFirstOption}
                  name="order"
                  value="desc"
                >
                  Desc
                </SubMenuBtn>
              </li>
              <li>
                <SubMenuBtn
                  type="button"
                  onClick={this.changeFirstOption}
                  name="order"
                  value="asc"
                >
                  Asc
                </SubMenuBtn>
              </li>
            </SubMenu>
          </Menu>
        </MenuFlexWrap>

        <MenuFlexWrap>
          <OptionLabel>type</OptionLabel>
          <Menu className="listPerent">
            <OpeningOption className="FirstItem">All</OpeningOption>
            <svg height="12" width="12">
              <use href={svg + '#icon-back'}></use>
            </svg>
            <SubMenu>
              <li>
                <SubMenuBtn
                  type="button"
                  onClick={this.changeFirstOption}
                  name="type"
                  value="gif,jpg,png"
                >
                  All
                </SubMenuBtn>
              </li>
              <li>
                <SubMenuBtn
                  type="button"
                  onClick={this.changeFirstOption}
                  name="type"
                  value="jpg,png"
                >
                  Static
                </SubMenuBtn>
              </li>
              <li>
                <SubMenuBtn
                  type="button"
                  onClick={this.changeFirstOption}
                  name="type"
                  value="gif"
                >
                  Animated
                </SubMenuBtn>
              </li>
            </SubMenu>
          </Menu>
        </MenuFlexWrap>

        <MenuFlexWrap>
          <OptionLabel>breed</OptionLabel>
          <Menu className="listPerent">
            <OpeningOption className="FirstItem">None</OpeningOption>
            <svg height="12" width="12">
              <use href={svg + '#icon-back'}></use>
            </svg>
            <SubMenu>
              {breeds.map(({ id, name }) => this.getBreedsHtml(id, name))}
            </SubMenu>
          </Menu>
        </MenuFlexWrap>

        <MenuFlexWrap>
          <OptionLabel>limit</OptionLabel>
          <LimitMenu className="listPerent">
            <OpeningOption className="FirstItem">
              5 items per page
            </OpeningOption>
            <svg height="12" width="12">
              <use href={svg + '#icon-back'}></use>
            </svg>
            <SubMenu>
              <li>
                <SubMenuBtn
                  type="button"
                  onClick={this.changeFirstOption}
                  name="limit"
                  value="5"
                >
                  5 items per page
                </SubMenuBtn>
              </li>
              <li>
                <SubMenuBtn
                  type="button"
                  onClick={this.changeFirstOption}
                  name="limit"
                  value="10"
                >
                  10 items per page
                </SubMenuBtn>
              </li>
              <li>
                <SubMenuBtn
                  type="button"
                  onClick={this.changeFirstOption}
                  name="limit"
                  value="15"
                >
                  15 items per page
                </SubMenuBtn>
              </li>
              <li>
                <SubMenuBtn
                  type="button"
                  onClick={this.changeFirstOption}
                  name="limit"
                  value="20"
                >
                  20 items per page
                </SubMenuBtn>
              </li>
            </SubMenu>
          </LimitMenu>
        </MenuFlexWrap>

        <SubmitBtn type="button" onClick={this.onSubmit}>
          <BtnSvg width="17" height="20">
            <use href={`${svg}#icon-update`}></use>
          </BtnSvg>
        </SubmitBtn>
      </MainList>
    );
  }
}
