import styled from 'styled-components';

export const MainList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 640px;
  height: 156px;
  margin-top: 20px;
  padding: 20px;
  padding-top: 10px;
  background-color: ${p => p.theme.colors.mainBg};
  border-radius: ${p => p.theme.radii.round};
`;

export const MenuFlexWrap = styled.div`
  display: flex;
  flex-direction: column;
  :nth-child(2n) {
    margin-left: 20px;
  }
  :nth-child(n + 3) {
    margin-top: 10px;
  }
`;

export const OptionLabel = styled.p`
  margin-left: 10px;
  color: ${p => p.theme.colors.regularText};
  font-size: 10px;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 1.8;
  text-transform: uppercase;
`;

export const OpeningOption = styled.p`
  color: ${p => p.theme.colors.boldText};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: 1.5;
`;

export const Menu = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  width: 290px;
  padding: 8px 10px;
  color: ${p => p.theme.colors.boldText};
  background-color: ${p => p.theme.colors.mainBgBtn};
  border: 2px solid transparent;
  border-radius: ${p => p.theme.radii.normal};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: 1.5;

  &:hover,
  &:focus {
    border-color: ${p => p.theme.colors.secondBg};
  }

  & svg {
    transform: rotate(-90deg);
    margin-left: auto;
    fill: ${p => p.theme.colors.regularText};
  }
  &:hover svg,
  &:focus svg {
    transform: rotate(90deg);
  }
`;

export const LimitMenu = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  width: 240px;
  padding: 8px 10px;
  color: ${p => p.theme.colors.boldText};
  background-color: ${p => p.theme.colors.mainBgBtn};
  border: 2px solid transparent;
  border-radius: ${p => p.theme.radii.normal};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: 1.5;

  &:hover,
  &:focus {
    border-color: ${p => p.theme.colors.secondBg};
  }

  & svg {
    transform: rotate(-90deg);
    margin-left: auto;
    fill: ${p => p.theme.colors.regularText};
  }
  &:hover svg,
  &:focus svg {
    transform: rotate(90deg);
  }
`;

export const SubMenu = styled.ul`
  position: absolute;
  z-index: 2;
  display: none;
  left: 0;
  top: 100%;
  width: 100%;
  max-height: 200px;
  overflow-x: scroll;
  color: ${p => p.theme.colors.regularText};
  background-color: ${p => p.theme.colors.mainBg};
  border: 2px solid ${p => p.theme.colors.secondBg};
  border-radius: ${p => p.theme.radii.normal};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: 1.5;

  ${'li'}:hover & {
    display: block;
  }
`;

export const SubMenuBtn = styled.button`
  width: 100%;
  padding: 8px 10px;
  text-align: left;
  border: ${p => p.theme.borders.none};
  color: ${p => p.theme.colors.regularText};
  background-color: ${p => p.theme.colors.mainBgBtn};
`;

export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-left: 10px;
  margin-top: auto;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.mainBgBtn};

  & + & {
    margin-left: 10px;
  }

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.activeBgBtn};
  }
`;

export const BtnSvg = styled.svg`
  fill: ${p => p.theme.colors.mainTextBtn};
  ${'button'}:hover &,
  ${'button'}:focus & {
    fill: ${p => p.theme.colors.activeTextBtn};
  }
`;
