import { LoaderCss, LoaderImg } from './Loader.styled';
import loader from '../../image/loader-icon.png';
export const Loader = () => {
  return (
    <LoaderCss>
      <LoaderImg src={loader} alt="loader" />
    </LoaderCss>
  );
};
