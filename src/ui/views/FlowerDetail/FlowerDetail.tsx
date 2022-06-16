import { useFetch } from '../../../useFetch';
import { useParams } from 'react-router-dom';
import { Spinner } from '../../_components/atoms/Spinner/Spinner';

import { StyledMainContainer } from '../../_components/objects/MainContainer/MainContainer';
import { StyledFlexContainer } from '../../_components/objects/FlexContainer/FlexContainer';
import { Title } from '../../_components/atoms/Title/Title';
import { Card } from '../../_components/molecules/Card/Card';

import { Flower } from '../../../entities/Flower';

export const FlowerDetail = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useFetch<Flower>(
    `https://dulces-petalos.herokuapp.com/api/product/${id}`
  );

  if (isError)
    return <div className="element-center-page">Ha ocurrido un error</div>;

  if (isLoading)
    return (
      <div className="element-center-page">
        <Spinner />
      </div>
    );

  console.log('data', data);

  return (
    <StyledMainContainer>
      <StyledFlexContainer>
        <Title text="Flower detail" />
        <Card
          cardType="secondary"
          flower={data}
          btnText="return"
          btnUrl={`/`}
        />
      </StyledFlexContainer>
    </StyledMainContainer>
  );
};
