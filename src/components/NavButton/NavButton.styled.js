import styled from 'styled-components';
import {
  currentPageBg,
  currentPageText,
} from '../../utils/currentPageIsActive';

export const ListItem = styled.li`
  & + & {
    margin-left: 16px;
  }
`;

export const BtnWithImg = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 138px;
  height: 198px;
  background-color: ${p => p.bgColor};
  border: 4px solid rgba(255, 255, 255, 0.6);
  border-radius: ${p => p.theme.radii.round};
`;

export const ChooseBtn = styled.button`
  width: 139px;
  height: 36px;
  margin-top: 10px;
  text-align: center;
  color: ${p => currentPageText(p)};
  background-color: ${p => currentPageBg(p)};
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.none};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 1.33;
  text-transform: uppercase;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.hoverBgBtn};
  }
`;
