import styled from 'styled-components';

export const Background = styled.div`
  position: relative;
  margin-left: auto;
  width: 680px;
  height: 840px;
  overflow: visible;
  object-fit: cover;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.homeRect};
`;

export const BgImg = styled.img`
  position: absolute;
  top: -30px;
  left: -65px;
`;
