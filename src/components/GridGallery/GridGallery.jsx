import { GelleryItem } from '../GridGalleryItem/GridGalleryItem';
import { List } from './GridGallery.styled';

export const Gallery = ({ images, createCatFullInfo, showCatInfo }) => {
  return (
    <List>
      {images.map(img => (
        <GelleryItem
          key={img.id}
          img={img}
          createCatFullInfo={createCatFullInfo}
          showCatInfo={showCatInfo}
        />
      ))}
    </List>
  );
};
