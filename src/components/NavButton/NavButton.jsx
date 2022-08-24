import { BtnWithImg, ChooseBtn, ListItem } from './NavButton.styled';

export const NavButton = ({ img, color, text, changePage, currentPage }) => {
  return (
    <ListItem>
      <BtnWithImg
        type="button"
        bgColor={color}
        onClick={() => changePage(text)}
      >
        <img src={img} alt={text} />
      </BtnWithImg>
      <ChooseBtn
        type="button"
        currentPage={currentPage}
        currentBtn={text}
        onClick={() => changePage(text)}
      >
        <p>{text}</p>
      </ChooseBtn>
    </ListItem>
  );
};
