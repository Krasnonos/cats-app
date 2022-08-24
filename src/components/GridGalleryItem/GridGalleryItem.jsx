import { Item, CardImg, BtnOverlay, ImgBtn } from './GridGalleryItem.styled';

export const GelleryItem = ({ img, createCatFullInfo, showCatInfo }) => {
  return (
    <Item>
      <CardImg src={img.url} alt={img.breeds[0].name} loading="lazy"></CardImg>
      <BtnOverlay>
        <ImgBtn
          data-id={img.id}
          onClick={() => {
            if (createCatFullInfo) {
              createCatFullInfo(img.breeds[0].id);
            }
            if (showCatInfo) {
              showCatInfo(img.breeds[0].id);
            }
          }}
        >
          {img.breeds[0].name}
        </ImgBtn>
      </BtnOverlay>
    </Item>
  );
};
