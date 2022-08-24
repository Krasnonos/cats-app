import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 770px;
  padding: 20px;
  background-color: ${p => p.theme.colors.mainBgBtn};
  border-radius: ${p => p.theme.radii.round};
`;

export const FlexContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
