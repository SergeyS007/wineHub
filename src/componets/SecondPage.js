import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SecondPage.scss';

const SecondPage = () => {
  const [wineData, setWineData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWineData = async () => {
      try {
        const response = await axios.get('https://2239-178-54-63-27.ngrok-free.app/wines/random-bottle-wine/');
        console.log('API Response:', response.data);
        const data = response.data;
        if (data.results && data.results.length > 0) {
          setWineData(data.results[0]);
        } else {
          setError('No results found in the response.');
        }
      } catch (error) {
        console.error('Error fetching wine data:', error);
        setError('Error fetching wine data.');
      }
    };

    fetchWineData();
  }, []);

  // Додатковий лог для перевірки URL зображення
  console.log('Wine Image URL:', wineData?.image_url);

  return (
    <section className="second-page">
      
      <div className="second-page__content">
        <h1 className="second-page__title">Random Wine</h1>
        <p className="second-page__sub-title">In case of important negotiations</p>
        {error ? (
          <p>{error}</p>
        ) : (
          wineData && (
            <>
              <div className="second-page__details">
                <div className="second-page__rating">
                  <p>RATING {wineData.rating.average} <span className="second-page__stars">★★★★★</span></p>
                  <p className="second-page__reviews">Rating based on {wineData.rating.reviews}</p>
                </div>
                <h2 className="second-page__wine-name">{wineData.name}</h2>
                <ul className="second-page__wine-info">
                  <li><span>Year</span> {wineData.vintage}</li>
                  <li><span>Country</span> {wineData.location.country}</li>
                  <li><span>Region</span> {wineData.location.region}</li>
                  <li><span>Wine type</span> {wineData.wine_type.type}</li>
                </ul>
                <button className="second-page__button" onClick={() => window.location.reload()}>Next Wine</button>
              </div>
              {wineData.image_url ? (
                <img src={wineData.image_url} alt={wineData.name} className="second-page__image" />
              ) : (
                <p>No image available</p>
              )}
            </>
          )
        )}
      </div>
    </section>
  );
};

export default SecondPage;
