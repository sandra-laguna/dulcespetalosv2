import { useEffect, useState } from 'react';

import { Spinner } from '../_components/Spinner/Spinner';

import { Flower } from '../../entities/Flower';

import { StyledMainContainer } from '../_components/MainContainer/MainContainer';
import { GridContainer } from '../_components/GridContainer/GridContainer';
import { Card } from '../_components/Card/Card';

export const FlowersList = () => {
  //const {flowers, error } = useFlowersList(); <-- Para crear custom Hook
  const [flowers, setFlowers] = useState<Flower[] | undefined>(undefined);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetchAllFlowers();
  }, []); //El array indica cuando se va a volver a ejecutar el useEffect (Array de dependencias), en este caso solo cuando cargue el componente por primera vez

  const fetchAllFlowers = async () => {
    /*     fetch('https://dulces-petalos.herokuapp.com/api/product')
      .then( response => response.json )
      .then(data => 
        setFlowers(data)
      )
      .catch(error=>console.log('error', error))
      .finally(()=>setIsLoading(false)) */

    try {
      const response = await fetch(
        'https://dulces-petalos.herokuapp.com/api/product'
      );
      const data = await response.json();
      setFlowers(data);
    } catch (e) {
      setError(true);
    }
  };

  if (error)
    return <div className="element-center-page">Ha ocurrido un error</div>;

  if (!flowers)
    return (
      <div className="element-center-page">
        <Spinner />
      </div>
    );

  return (
    <StyledMainContainer>
      <GridContainer>
        {flowers.map((flower) => (
          <Card
            key={flower.id}
            cardType="primary"
            flower={flower}
            btnText="see more"
            btnUrl={`/flower/${flower.id}`}
          />
        ))}
      </GridContainer>
    </StyledMainContainer>
  );
};
