import styled from 'styled-components';

export const MainList = styled.ul`
  display: flex;
  margin-left: 10px;
`;

export const BreedsItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  width: 226px;
  padding: 8px 10px;
  color: ${p => p.theme.colors.regularText};
  background-color: ${p => p.theme.colors.mainBg};
  border: 2px solid transparent;
  border-radius: ${p => p.theme.radii.normal};
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;

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
  overflow-y: scroll;
  color: ${p => p.theme.colors.regularText};
  border: 2px solid ${p => p.theme.colors.secondBg};
  background-color: ${p => p.theme.colors.mainBg};
  border-radius: ${p => p.theme.radii.normal};
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;

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

export const LimitItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  width: 101px;
  padding: 8px 10px;
  margin-left: 10px;
  color: ${p => p.theme.colors.regularText};
  background-color: ${p => p.theme.colors.mainBg};
  border: 2px solid transparent;
  border-radius: ${p => p.theme.radii.normal};
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;

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

export const SortBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-left: 10px;
  fill: ${p => p.theme.colors.regularText};
  background-color: ${p => p.theme.colors.mainBg};
  border-radius: ${p => p.theme.radii.normal};
  border: 2px solid transparent;

  &:hover,
  &:focus {
    fill: ${p => p.theme.colors.hoverTextBtn};
    border-color: ${p => p.theme.colors.secondBg};
  }
`;
