import svg from '../../image/icons.svg';
import {
  Button,
  TextCurrentPage,
  FlexContainer,
  BreedId,
  UploadBtn,
  UploadSvg,
} from './MainContentNav.styled';

export const MainContentNav = ({ currentPage, id, isUpload, openModal }) => {
  return (
    <FlexContainer>
      <Button type="button">
        <svg width="20" height="20">
          <use href={svg + '#icon-back'}></use>
        </svg>
      </Button>
      <TextCurrentPage isMuted={id}>{currentPage}</TextCurrentPage>
      {id && <BreedId>{id}</BreedId>}
      {isUpload && (
        <UploadBtn type="button" onClick={openModal}>
          <UploadSvg width="20" height="20">
            <use href={svg + '#icon-upload'}></use>
          </UploadSvg>
          upload
        </UploadBtn>
      )}
    </FlexContainer>
  );
};
