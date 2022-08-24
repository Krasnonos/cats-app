export const SortImg = (images, direction) => {
  if (direction === 0) {
    return images.sort((prev, next) => {
      const prevName = prev.breeds[0].name;
      const nextName = next.breeds[0].name;
      return prevName > nextName ? 1 : -1;
    });
  } else {
    return images.sort((prev, next) => {
      const prevName = prev.breeds[0].name;
      const nextName = next.breeds[0].name;
      return nextName > prevName ? 1 : -1;
    });
  }
};
