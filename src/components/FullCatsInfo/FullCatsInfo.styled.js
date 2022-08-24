import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 770px;
  padding: 20px;
  overflow-y: scroll;
  background-color: ${p => p.theme.colors.mainBgBtn};
  border-radius: ${p => p.theme.radii.round};
`;

export const SwiperWrap = styled.div`
  width: 640px;
  height: 380px;

  margin-top: 20px;
`;

export const ImageWrap = styled.div`
  width: 640px;
  height: 360px;
  overflow: hidden;
  border-radius: ${p => p.theme.radii.round};
`;

export const ImgCard = styled.img`
  width: 640px;
  height: 360px;
  object-fit: cover;
`;
