import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.secondBg};
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
  height: 40px;
  padding: 5px 30px;
  margin-left: 10px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  background-color: ${p =>
    p.isMuted ? p.theme.colors.secondBg : p.theme.colors.activeBgBtn};
  color: ${p =>
    p.isMuted ? p.theme.colors.mainTextBtn : p.theme.colors.activeTextBtn};
  border-radius: ${p => p.theme.radii.normal};
`;

export const BreedId = styled.p`
  display: inline-block;
  height: 40px;
  padding: 5px 30px;
  margin-left: 10px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  background-color: ${p => p.theme.colors.activeBgBtn};
  color: ${p => p.theme.colors.activeTextBtn};
  border-radius: ${p => p.theme.radii.normal};
`;

export const UploadBtn = styled.button`
  display: flex;
  align-items: center;
  margin-left: auto;
  padding-left: 30px;
  padding-right: 30px;
  background-color: ${p => p.theme.colors.secondBg};
  color: ${p => p.theme.colors.mainTextBtn};
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.none};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.33;
  letter-spacing: 2px;
  text-transform: uppercase;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.activeBgBtn};
    color: ${p => p.theme.colors.activeTextBtn};
  }
`;

export const UploadSvg = styled.svg`
  margin-right: 10px;
  fill: ${p => p.theme.colors.mainTextBtn};

  ${'button'}:hover &,
  ${'button'}:focus & {
    fill: ${p => p.theme.colors.activeTextBtn};
  }
`;
