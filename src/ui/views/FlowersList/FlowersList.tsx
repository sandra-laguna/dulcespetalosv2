import { useFetch } from '../../../useFetch';

import { Spinner } from '../../_components/atoms/Spinner/Spinner';

import { StyledMainContainer } from '../../_components/objects/MainContainer/MainContainer';
import { GridContainer } from '../../_components/objects/GridContainer/GridContainer';
import { Card } from '../../_components/molecules/Card/Card';

import { Flower } from '../../../entities/Flower';

export const FlowersList = () => {
  const { data, isLoading, isError } = useFetch<Flower[]>(
    'https://dulces-petalos.herokuapp.com/api/product'
  );

  if (isError)
    return <div className="element-center-page">Ha ocurrido un error</div>;

  if (isLoading)
    return (
      <div className="element-center-page">
        <Spinner />
      </div>
    );

  return (
    <StyledMainContainer>
      <GridContainer>
        {data?.map((flower: Flower) => (
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
