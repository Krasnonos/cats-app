import {
  DescrWrap,
  TitleBreed,
  BreedText,
  FlexWrap,
  TemperamentWrap,
  AddWrap,
  PropertyTitle,
  PropertyDescr,
} from './CatsDescr.styled';

export const CatsDescr = ({ catsInfo }) => {
  return (
    <DescrWrap>
      <TitleBreed>{catsInfo.name}</TitleBreed>
      <BreedText>{catsInfo.description}</BreedText>
      <FlexWrap>
        <TemperamentWrap>
          <PropertyTitle>Temperaments:</PropertyTitle>
          <PropertyDescr>{catsInfo.temperament}</PropertyDescr>
        </TemperamentWrap>
        <AddWrap>
          <PropertyTitle>
            Origin: <PropertyDescr>{catsInfo.origin}</PropertyDescr>
          </PropertyTitle>

          <PropertyTitle>
            Weight: <PropertyDescr>{catsInfo.weight} kgs</PropertyDescr>
          </PropertyTitle>

          <PropertyTitle>
            Life span: <PropertyDescr>{catsInfo.life_span} years</PropertyDescr>
          </PropertyTitle>
        </AddWrap>
      </FlexWrap>
    </DescrWrap>
  );
};
