import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Spinner } from '../_components/Spinner/Spinner';
import { Button } from '../_components/Button/Button';

import { Flower } from '../../entities/Flower';

import waterdropIcon from '../_assets/images/waterdrop.png';

import './FlowerDetail.css';

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

  const wateringsFlower = (flower: Flower): number[] => {
    return Array.from(Array(flower.wateringsPerWeek).keys());
    //Retorna array con la longitud de "wateringsPerWeek" de cada flor
  };

  return (
    <div className="main-container">
      <article className="flower-detail-container">
        <h2 className="flower-detail-title">Flower Detail</h2>
        <div className="flower-detail-card">
          <img
            src={flower.imgUrl}
            alt={flower.name}
            className="flower-detail-card-img"
          />

          <NavLink to="/">
            {/* <Button text="Return" type="primary" /> */}
            <Button model="primary">Return</Button>
          </NavLink>

          <div className="flower-detail-card-info">
            {/* <div>
            {Object.entries(flower).map((item) => (
              <p>{item}</p>
            ))}
          </div> */}

            <p className="flower-detail-card-property">
              Name:{' '}
              <span className="flower-detail-card-specification">
                {flower.name}
              </span>
            </p>
            <p className="flower-detail-card-property">
              Binomial name:{' '}
              <span className="flower-detail-card-specification">
                {flower.binomialName}
              </span>
            </p>
            <p className="flower-detail-card-property">
              Price:{' '}
              <span className="flower-detail-card-specification">
                {flower.price}$
              </span>
            </p>

            <p className="flower-detail-card-property">
              Waterings per week:
              {wateringsFlower(flower).map(
                (
                  item,
                  index //Importante la key
                ) => (
                  <img
                    src={waterdropIcon}
                    alt={`${item}`}
                    className="waterdrop-icon"
                    key={`waterdrop_${index}`}
                  />
                )
              )}
            </p>
            <p className="flower-detail-card-property">
              Fertilizer type:{' '}
              <span className="flower-detail-card-specification">
                {flower.fertilizerType}
              </span>
            </p>
            <p className="flower-detail-card-property">
              Height:{' '}
              <span className="flower-detail-card-specification">
                {flower.heightInCm}cm
              </span>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};
