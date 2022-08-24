import { Component } from 'react';
import { createPortal } from 'react-dom';
import {
  Overllay,
  ModalBlock,
  CloseBtn,
  CloseSvg,
  HeaderText,
  LicenceText,
  Licencelink,
  LoadZone,
  ImgThumb,
  LoadedImg,
  LoadZoneText,
  Input,
  BoldLable,
  BoldLoadText,
  FileName,
  SubmitBtn,
  ErrorBlock,
  ErrorText,
  PlaceHolderSvg,
} from './Modal.styled';
import svg from '../../image/icons.svg';
const rootRef = document.querySelector('#modal-root');

export class Modal extends Component {
  state = {
    imageUrl: null,
    imageName: null,
    file: null,
    error: false,
  };

  componentDidMount() {
    const loadZoneEl = document.querySelector('.loadZone');
    loadZoneEl.addEventListener('dragover', this.dragOverMethod);
    loadZoneEl.addEventListener('drop', this.dropMethod);
  }

  dragOverMethod = e => {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  dropMethod = e => {
    e.stopPropagation();
    e.preventDefault();
    const file = e.dataTransfer.files;

    const nomrmalImageName = file[0].name.toLowerCase();
    const isPng = nomrmalImageName.endsWith('png');
    const isJpg = nomrmalImageName.endsWith('jpg');
    const isGif = nomrmalImageName.endsWith('gif');

    if (isPng || isJpg || isGif) {
      this.setState({ file: file[0] });
      this.readFile(file[0]);
    }
  };

  loadImg = e => {
    const file = e.target.files[0];
    this.setState({ file: e.target.files[0] });
    this.readFile(file);
  };

  readFile = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = e => {
      this.setState({
        imageUrl: reader.result,
        imageName: file.name,
        error: false,
      });
    };
  };

  submitImg = () => {
    const { imageName, file } = this.state;

    var formdata = new FormData();
    formdata.append('file', file, imageName);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      'https://api.thecatapi.com/v1/images/upload?api_key=29fa3a0d-cc24-4807-8889-3bc49f02b0f7',
      requestOptions
    )
      .then(response => {
        if (response.ok) {
          response.text();
        } else {
          throw new Error('error');
        }
      })
      .then(result =>
        this.setState({ imageUrl: null, imageName: null, file: null })
      )
      .catch(error => this.setState({ error: true }));
  };

  render() {
    const { imageUrl, imageName, error } = this.state;

    return createPortal(
      <Overllay>
        <ModalBlock>
          <CloseBtn type="button" onClick={this.props.closeModal}>
            <CloseSvg>
              <use href={`${svg}#icon-close`}></use>
            </CloseSvg>
          </CloseBtn>
          <HeaderText>Upload a .jpg or .png Cat Image</HeaderText>
          <LicenceText>
            Any uploads must comply with the
            <Licencelink href="https://thecatapi.com/privacy">
              {' '}
              upload guidelines
            </Licencelink>{' '}
            or face deletion.
          </LicenceText>
          <LoadZone className="loadZone" error={error}>
            <PlaceHolderSvg>
              <use href={`${svg}#icon-modalPlaceholder`}></use>
            </PlaceHolderSvg>
            {imageUrl && (
              <ImgThumb>
                <LoadedImg className="image" src={imageUrl} alt="" />
              </ImgThumb>
            )}
            {!imageUrl && (
              <LoadZoneText>
                <BoldLoadText>Drag here</BoldLoadText> your file or{' '}
                <Input
                  type="file"
                  id="fileElem"
                  accept="image/jpeg,image/gif,image/png"
                  onChange={this.loadImg}
                />
                <BoldLable htmlFor="fileElem">Click here </BoldLable>
                to upload
              </LoadZoneText>
            )}
          </LoadZone>
          <FileName>
            {imageName ? `Image File Name: ${imageName}` : 'No file selected'}
          </FileName>
          {imageUrl && !error && (
            <SubmitBtn type="button" onClick={this.submitImg}>
              upload photo
            </SubmitBtn>
          )}
          {error && (
            <ErrorBlock>
              <svg width="20" height="20">
                <use href={`${svg}#icon-error`}></use>
              </svg>
              <ErrorText>No Cat found - try a different one</ErrorText>
            </ErrorBlock>
          )}
        </ModalBlock>
      </Overllay>,
      rootRef
    );
  }
}
