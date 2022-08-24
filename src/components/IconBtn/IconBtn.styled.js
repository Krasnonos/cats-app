import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.mainBgBtn};

  & + & {
    margin-left: 10px;
  }

  :hover,
  :focus {
    color: ${p => p.theme.colors.hoverTextBtn};
    background-color: ${p => p.theme.colors.hoverBgBtn};
  }

  :active {
    color: ${p => p.theme.colors.activeTextBtn};
    background-color: ${p => p.theme.colors.activeBgBtn};
  }
`;

export const BtnSvg = styled.svg`
  fill: ${p => p.theme.colors.mainTextBtn};

  ${'button'}:active & {
    fill: ${p => p.theme.colors.activeTextBtn};
  }
`;
