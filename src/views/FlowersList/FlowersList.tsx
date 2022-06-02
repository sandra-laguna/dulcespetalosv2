import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Spinner } from '../_components/Spinner/Spinner';
import { Button } from '../_components/Button/Button';

import { Flower } from '../../entities/Flower';

import './FlowerList.css';

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
    <div className="main-container">
      <div className="flowers-container">
        {flowers.map((flower) => (
          <div key={flower.id} className="flower-card">
            <img
              src={flower.imgUrl}
              alt={flower.name}
              className="flower-info-img"
            />
            <div className="flower-info">
              <h2 className="flower-info-name">{flower.name}</h2>
              <p className="flower-info-binomialName">{flower.binomialName}</p>
              <NavLink to={`/flower/${flower.id}`}>
                <Button text="see more" type="primary" />
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
