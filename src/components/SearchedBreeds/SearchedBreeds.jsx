import { MainContentNav } from '../MainContentNav/MainContentNav';
import { Gallery } from '../GridGallery/GridGallery';
import { Wrap, SearchedText, BreedName } from './SearchedBreeds.styled';

export const SearchedBreeds = ({ breed, images, createCatFullInfo }) => {
  return (
    <Wrap>
      <MainContentNav currentPage={'search'} />
      <SearchedText>
        Serch resaults for: <BreedName>{breed}</BreedName>
      </SearchedText>
      <Gallery images={images} createCatFullInfo={createCatFullInfo} />
    </Wrap>
  );
};
