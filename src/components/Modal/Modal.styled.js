import styled from 'styled-components';

export const Overllay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(29, 29, 29, 0.6);
`;

export const ModalBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  top: 30px;
  right: 30px;
  width: 680px;
  height: 840px;
  margin-left: auto;
  padding: 20px;
  background-color: ${p => p.theme.colors.modal};
  border-radius: ${p => p.theme.radii.round};
  @media screen and (max-height: 870px) {
    height: auto;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${p => p.theme.colors.mainBgBtn};
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.none};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.activeBgBtn};
  }
`;

export const CloseSvg = styled.svg`
  width: 17px;
  height: 17px;
  fill: ${p => p.theme.colors.mainTextBtn};
  ${'button'}:hover &,
${'button'}:focus & {
    fill: ${p => p.theme.colors.mainBgBtn};
  }
`;

export const HeaderText = styled.p`
  margin-top: 100px;
  text-align: center;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1.44;
  color: ${p => p.theme.colors.boldText};
`;

export const LicenceText = styled.p`
  text-align: center;
  margin-top: 10px;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.5;
  color: ${p => p.theme.colors.regularText};
`;

export const Licencelink = styled.a`
  text-decoration: none;
  color: ${p => p.theme.colors.pinkBg};
`;

export const LoadZone = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 640px;
  height: 320px;
  background-color: ${p =>
    p.error ? p.theme.colors.secondBg : p.theme.colors.mainBgBtn};
  background-repeat: no-repeat;
  background-position: 50%, 50%;
  border: 2px dashed
    ${p => (p.error ? p.theme.colors.pinkBg : p.theme.colors.secondBg)};
  border-radius: ${p => p.theme.radii.round};
`;

export const PlaceHolderSvg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  fill: ${p => p.theme.colors.modalSvg};
`;

export const ImgThumb = styled.div`
  width: 558px;
  height: 280px;
  overflow: hidden;
  z-index: 3;
  border-radius: ${p => p.theme.radii.normal};
`;

export const LoadedImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LoadZoneText = styled.p`
  text-align: center;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.5;
  color: ${p => p.theme.colors.regularText};
  z-index: 1;
`;

export const Input = styled.input`
  display: none;
`;

export const BoldLable = styled.label`
  cursor: pointer;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.5;
  color: ${p => p.theme.colors.boldText};
`;

export const BoldLoadText = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.5;
  color: ${p => p.theme.colors.boldText};
`;

export const FileName = styled.p`
  margin-top: 20px;
  text-align: center;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.5;
  color: ${p => p.theme.colors.regularText};
`;

export const SubmitBtn = styled.button`
  margin-top: 20px;
  padding: 12px 30px;
  color: ${p => p.theme.colors.mainBgBtn};
  background-color: ${p => p.theme.colors.activeBgBtn};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  font-weight: ${p => p.theme.fontWeights.boldText};
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 2px;
  line-height: 1.3;
  text-transform: uppercase;
`;

export const ErrorBlock = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 60px;
  padding: 20px;
  background-color: ${p => p.theme.colors.mainBgBtn};
  border-radius: ${p => p.theme.radii.normal};
`;

export const ErrorText = styled.p`
  margin-left: 10px;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontWeights.s};
  line-height: 1.5;
  color: ${p => p.theme.colors.regularText};
`;
