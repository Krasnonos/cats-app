import svg from '../../image/icons.svg';
import { BtnsList, BtnItem, Btns, BtnsIcon } from './VoteBtns.styled';

export const VoteBtns = ({ id, onVote }) => {
  return (
    <BtnsList>
      <BtnItem>
        <Btns type="button" onClick={() => onVote(id, 1)}>
          <BtnsIcon width="30" height="30">
            <use href={`${svg}#icon-likeGreenL`}></use>
          </BtnsIcon>
        </Btns>
      </BtnItem>
      <BtnItem>
        <Btns type="button" onClick={() => onVote(id, 2)}>
          <BtnsIcon width="30" height="30">
            <use href={`${svg}#icon-fav`}></use>
          </BtnsIcon>
        </Btns>
      </BtnItem>
      <BtnItem>
        <Btns type="button" onClick={() => onVote(id, 0)}>
          <BtnsIcon width="30" height="30">
            <use href={`${svg}#icon-dislikeYellowL`}></use>
          </BtnsIcon>
        </Btns>
      </BtnItem>
    </BtnsList>
  );
};
