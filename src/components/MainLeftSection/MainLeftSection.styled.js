import styled from 'styled-components';

export const LeftBar = styled.div`
  position: sticky;
  margin-right: 150px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LogoBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: ${p => p.theme.borders.none};
`;

export const TitleWrap = styled.div`
  margin-top: 85px;
`;

export const HeroTitle = styled.h1`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 1.32;
  color: ${p => p.theme.colors.boldText};
`;

export const HeroWelcome = styled.p`
  margin-top: 10px;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.45;
  color: ${p => p.theme.colors.regularText};
`;

export const HeroStart = styled.p`
  margin-top: 60px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.45;
  color: ${p => p.theme.colors.boldText};
`;

export const PagesList = styled.ul`
  display: flex;
  margin-top: 20px;
`;

export const LogoText = styled.svg`
  fill: ${p => p.theme.colors.boldText};
`;
