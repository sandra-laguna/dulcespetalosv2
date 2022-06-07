import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Flower } from '../../../../entities/Flower';

import { Button } from '../../atoms/Button/Button';

import waterdropIcon from '../../../_assets/images/waterdrop.png';

interface Props {
  cardType: 'primary' | 'secondary';
  flower: Flower;
  btnText: string;
  btnUrl: string;
}

const StyledCard = styled.div<{ cardType: 'primary' | 'secondary' }>`
  border-radius: var(--border-radius-md);
  box-shadow: var(--primary-box-shadow);
  transition: all 0.3s ease;

  ${(props) =>
    props.cardType === 'primary' &&
    css`
      &:hover {
        transform: scale(1.05);
      }
    `}

  ${(props) =>
    props.cardType === 'secondary' &&
    css`
      padding: var(--padding-m);
      background-color: var(--color-secondary-tint);
    `}
`;

const CardInfo = styled.div<{ cardType: 'primary' | 'secondary' }>`
  line-height: var(--m);

  ${(props) =>
    props.cardType === 'primary' &&
    css`
      padding: var(--padding-s);
    `}

  ${(props) =>
    props.cardType === 'secondary' &&
    css`
      padding: var(--padding-s) 0;
    `}
`;

const CardTitle = styled.h2`
  font-size: 1.4rem;
`;

const CardSubTitle = styled.h4`
  font-style: italic;
`;

const CardImg = styled.img<{ cardType: 'primary' | 'secondary' }>`
  height: var(--height-l);
  object-fit: cover;

  ${(props) =>
    props.cardType === 'primary' &&
    css`
      width: var(--width-full);
      border-top-left-radius: var(--border-radius-md);
      border-top-right-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.cardType === 'secondary' &&
    css`
      width: var(--width-xl);
      border-radius: var(--border-radius-md);
    `}
`;

const CardIcon = styled.img`
  height: var(--margin-xs);
  margin: var(--margin-xxs);
`;

const wateringsFlower = (flower: Flower): number[] => {
  return Array.from(Array(flower.wateringsPerWeek).keys());
  //Retorna array con la longitud de "wateringsPerWeek" de cada flor
};

export const Card: React.FC<Props> = ({
  cardType,
  flower: flower,
  btnText,
  btnUrl,
}) => (
  <StyledCard cardType={cardType}>
    <CardImg src={flower.imgUrl} alt={flower.name} cardType={cardType} />
    <CardInfo cardType={cardType}>
      <CardTitle>{cardType === 'primary' ? flower.name : ''}</CardTitle>
      <CardSubTitle>
        {cardType === 'primary' ? flower.binomialName : ''}
      </CardSubTitle>
      {cardType === 'secondary' && (
        <CardInfo cardType={cardType}>
          <p>
            <strong>Name: </strong>
            {flower.name}
          </p>
          <p>
            <strong>Binomial name: </strong>
            {flower.binomialName}
          </p>
          <p>
            <strong>Price: </strong>
            {flower.price + '$'}
          </p>
          <p>
            <strong>Waterings per week: </strong>
            {wateringsFlower(flower).map(
              (
                item,
                index //Importante la key
              ) => (
                <CardIcon
                  src={waterdropIcon}
                  alt={`${item}`}
                  key={`waterdrop_${index}`}
                />
              )
            )}
          </p>
          <p>
            <strong>Fertilizer type: </strong>
            {flower.fertilizerType}
          </p>
          <p>
            <strong>Height: </strong>
            {flower.heightInCm + 'cm'}
          </p>
        </CardInfo>
      )}

      <NavLink to={btnUrl}>
        <Button text={btnText} model="primary" />
      </NavLink>
    </CardInfo>
  </StyledCard>
);
