import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  overflow: hidden;
  border-radius: ${p => p.theme.radii.round};
  :nth-child(10n + 1) {
    width: 200px;
    height: 300px;
  }
  :nth-child(10n + 2) {
    width: 200px;
    height: 140px;
  }
  :nth-child(10n + 3) {
    width: 200px;
    height: 140px;
  }
  :nth-child(10n + 4) {
    width: 200px;
    height: 140px;
  }
  :nth-child(10n + 5) {
    margin-top: -160px;
    width: 420px;
    height: 300px;
  }
  :nth-child(10n + 6) {
    width: 200px;
    height: 140px;
  }
  :nth-child(10n + 7) {
    width: 200px;
    height: 140px;
  }
  :nth-child(10n + 8) {
    width: 200px;
    height: 300px;
  }
  :nth-child(10n + 9) {
    margin-top: -160px;
    width: 420px;
    height: 300px;
  }
  :nth-child(10n + 10) {
    width: 200px;
    height: 140px;
  }
`;

export const CardImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const BtnOverlay = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  padding: 10px;
  background: rgba(255, 134, 142, 0.6);

  ${'li'}:hover & {
    transform: translateY(-100%);
  }
`;

export const ImgBtn = styled.button`
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  color: ${p => p.theme.colors.mainTextBtn};
  background-color: ${p => p.theme.colors.modal};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
`;
