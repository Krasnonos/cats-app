import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px;
  padding-right: 20px;
  background-color: ${p => p.theme.colors.mainBg};
  border-radius: ${p => p.theme.radii.normal};

  & + & {
    margin-top: 10px;
  }
`;

export const Time = styled.p`
  padding: 3px 10px;
  font-size: 16px;
  line-height: 1.5;
  color: ${p => p.theme.colors.boldText};
  background-color: ${p => p.theme.colors.mainBgBtn};
  border-radius: 5px;
`;

export const Text = styled.p`
  margin-left: 20px;
  font-size: 16px;
  line-height: 1.5;
  color: ${p => p.theme.colors.regularText};
`;

export const ActionId = styled.span`
  color: ${p => p.theme.colors.boldText};
`;

export const ActionSvg = styled.svg`
  margin-left: auto;
`;
