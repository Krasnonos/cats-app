import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 770px;
  padding: 20px;
  overflow-y: scroll;
  background-color: ${p => p.theme.colors.mainBgBtn};
  border-radius: ${p => p.theme.radii.round};
`;

export const SearchedText = styled.p`
  margin-top: 20px;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.45;
  color: ${p => p.theme.colors.regularText};
`;

export const BreedName = styled.span`
  font-weight: 500;
  color: ${p => p.theme.colors.boldText};
`;
