import styled from 'styled-components';

export const BtnsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  width: 248px;
  height: 80px;
  overflow: hidden;
  background-color: ${p => p.theme.colors.mainBgBtn};
  border: 4px solid transparent;
  border-radius: ${p => p.theme.radii.round};
`;

export const BtnItem = styled.li`
  width: 80px;
  height: 80px;

  & + & {
    margin-left: 4px;
  }

  &:nth-child(1) {
    > button {
      background-color: ${p => p.theme.colors.greenBg};
      :hover,
      :focus {
        background-color: ${p => p.theme.colors.mutedGreen};
        > svg {
          fill: ${p => p.theme.colors.greenBg};
        }
      }
    }
  }
  &:nth-child(2) {
    > button {
      background-color: ${p => p.theme.colors.pinkBg};
      :hover,
      :focus {
        background-color: ${p => p.theme.colors.mutedPink};
        > svg {
          fill: ${p => p.theme.colors.pinkBg};
        }
      }
    }
  }
  &:nth-child(3) {
    > button {
      background-color: ${p => p.theme.colors.yellowBg};
      :hover,
      :focus {
        background-color: ${p => p.theme.colors.mutedYellow};
        > svg {
          fill: ${p => p.theme.colors.yellowBg};
        }
      }
    }
  }
`;

export const Btns = styled.button`
  width: 100%;
  height: 100%;
  border: ${p => p.theme.borders.none};
`;

export const BtnsIcon = styled.svg`
  fill: ${p => p.theme.colors.activeTextBtn};
`;
