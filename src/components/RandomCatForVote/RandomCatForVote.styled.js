import styled from 'styled-components';

export const RelativeWrap = styled.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: 52px;
`;

export const ImgWrap = styled.div`
  width: 640px;
  height: 360px;
  overflow: hidden;
  border-radius: ${p => p.theme.radii.round};
`;

export const VoteCatImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
