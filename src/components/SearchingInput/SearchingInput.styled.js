import styled from 'styled-components';

export const FormWrap = styled.form`
  position: relative;
  width: 470px;
  height: 60px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 15px 20px;
  border-radius: ${p => p.theme.radii.round};
  border: 2px solid transparent;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.5;
  color: ${p => p.theme.colors.regularText};
  background-color: ${p => p.theme.colors.mainBgBtn};

  :hover,
  :focus {
    border: 2px solid ${p => p.theme.colors.secondBg};
  }

  :active {
    border: 2px solid ${p => p.theme.colors.activeBgBtn};
  }
`;

export const SubmitBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.secondBg};
`;
