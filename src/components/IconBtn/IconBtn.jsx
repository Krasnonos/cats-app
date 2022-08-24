import svg from '../../image/icons.svg';
import { Button, BtnSvg } from './IconBtn.styled';

export const IconBtn = ({ icon, showVotedCats }) => {
  return (
    <Button type="button" onClick={showVotedCats}>
      <BtnSvg width="30" height="30">
        <use href={`${svg}#${icon}`}></use>
      </BtnSvg>
    </Button>
  );
};
