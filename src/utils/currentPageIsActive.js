export const currentPageBg = props => {
  if (props.currentPage === props.currentBtn) {
    return props.theme.colors.activeBgBtn;
  } else {
    return props.theme.colors.mainBgBtn;
  }
};

export const currentPageText = props => {
  if (props.currentPage === props.currentBtn) {
    return props.theme.colors.activeTextBtn;
  } else {
    return props.theme.colors.mainTextBtn;
  }
};
