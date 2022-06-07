import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Spinner } from '../../_components/atoms/Spinner/Spinner';

import { StyledMainContainer } from '../../_components/objects/MainContainer/MainContainer';
import { StyledFlexContainer } from '../../_components/objects/FlexContainer/FlexContainer';
import { Title } from '../../_components/atoms/Title/Title';
import { Card } from '../../_components/molecules/Card/Card';

import { Flower } from '../../../entities/Flower';

/* import waterdropIcon from '../_assets/images/waterdrop.png';

import './FlowerDetail.css'; */

export const FlowerDetail = () => {
  const { id } = useParams();

  const [flower, setFlower] = useState<Flower | undefined>(undefined);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetchFlowerDetail();
  }, []);

  const fetchFlowerDetail = async () => {
    try {
      const response = await fetch(
        `https://dulces-petalos.herokuapp.com/api/product/${id}`
      );
      const data = await response.json();
      setFlower(data);
    } catch (e) {
      setError(true);
    }
  };

  if (error)
    return <div className="element-center-page">Ha ocurrido un error</div>;

  if (!flower)
    return (
      <div className="element-center-page">
        <Spinner />
      </div>
    );

  /*   const wateringsFlower = (flower: Flower): number[] => {
    return Array.from(Array(flower.wateringsPerWeek).keys());
    //Retorna array con la longitud de "wateringsPerWeek" de cada flor
  }; */

  return (
    <StyledMainContainer>
      <StyledFlexContainer>
        <Title text="Flower detail" />
        <Card
          cardType="secondary"
          flower={flower}
          btnText="return"
          btnUrl={`/`}
        />
      </StyledFlexContainer>
    </StyledMainContainer>
  );
};
