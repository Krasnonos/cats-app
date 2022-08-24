import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 770px;
  padding: 20px;
  overflow-y: scroll;
  background-color: ${p => p.theme.colors.mainBgBtn};
  border-radius: ${p => p.theme.radii.round};
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 640px;
  max-height: 665px;
  overflow-x: scroll;
  gap: 20px;
  margin-top: 20px;
`;

export const ErrorMsg = styled.p`
  width: 100%;
  height: 60px;
  padding: 18px 20px;
  margin-top: 20px;
  color: ${p => p.theme.colors.regularText};
  background-color: ${p => p.theme.colors.mainBg};
  border-radius: ${p => p.theme.radii.normal};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.5;
`;
