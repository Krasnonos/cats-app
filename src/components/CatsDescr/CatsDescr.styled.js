import styled from 'styled-components';

export const DescrWrap = styled.div`
  position: relative;
  width: 640px;
  padding: 40px;
  padding-top: 26px;
  margin-top: 30px;
  border: 2px solid ${p => p.theme.colors.secondBg};
  border-radius: ${p => p.theme.radii.round};
  background-color: transparent;
`;

export const TitleBreed = styled.h1`
  margin-top: -55px;
  padding: 5px 40px;
  text-align: center;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1.44;
  color: ${p => p.theme.colors.boldText};
  background-color: ${p => p.theme.colors.mainBgBtn};
`;

export const BreedText = styled.p`
  color: ${p => p.theme.colors.regularText};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.45;
  text-align: center;
`;

export const FlexWrap = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const TemperamentWrap = styled.div`
  width: 50%;
`;

export const AddWrap = styled.div`
  margin-left: 20px;
  width: 50%;
`;

export const PropertyTitle = styled.div`
  color: ${p => p.theme.colors.boldText};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.44;

  & + & {
    margin-top: 5px;
  }
`;

export const PropertyDescr = styled.span`
  color: ${p => p.theme.colors.regularText};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.44;
`;
