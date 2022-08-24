import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 770px;
  padding: 20px;
  overflow-y: scroll;
  background-color: ${p => p.theme.colors.mainBgBtn};
  border-radius: ${p => p.theme.radii.round};
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.hoverBgBtn};
  > svg {
    fill: ${p => p.theme.colors.hoverTextBtn};
  }

  :hover,
  :focus {
    color: ${p => p.theme.colors.activeTextBtn};
    background-color: ${p => p.theme.colors.activeBgBtn};

    > svg {
      fill: currentColor;
    }
  }
`;

export const TextCurrentPage = styled.p`
  display: inline-block;
  padding: 5px 30px;
  margin-left: 10px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 2px;
  background-color: ${p => p.theme.colors.activeBgBtn};
  color: ${p => p.theme.colors.activeTextBtn};
`;
