import React from 'react';
import ReactDOM from 'react-dom/client';
import { CardType } from './shared';
import App from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const dataPlaces: CardType[] = [
  {
    id: 1,
    isPremium: true,
    imgSrc: 'img/apartment-01.jpg',
    priceValue: 120,
    isInBookmark: false,
    rating: 80,
    name: 'Beautiful & luxurious apartment at great location',
    typePlace: 'Apartment'
  },
  {
    id: 2,
    isPremium: false,
    imgSrc: 'img/room.jpg',
    priceValue: 80,
    isInBookmark: true,
    rating: 80,
    name: 'Wood and stone place',
    typePlace: 'Room'
  },
  {
    id: 3,
    isPremium: false,
    imgSrc: 'img/apartment-02.jpg',
    priceValue: 132,
    isInBookmark: false,
    rating: 80,
    name: 'Canal View Prinsengracht',
    typePlace: 'Apartment'
  },
  {
    id: 4,
    isPremium: true,
    imgSrc: 'img/apartment-03.jpg',
    priceValue: 180,
    isInBookmark: false,
    rating: 100,
    name: 'Nice, cozy, warm big bed apartment',
    typePlace: 'Apartment'
  },
  {
    id: 5,
    isPremium: false,
    imgSrc: 'img/room.jpg',
    priceValue: 80,
    isInBookmark: true,
    rating: 80,
    name: 'Wood and stone place',
    typePlace: 'Room'
  },
];

root.render(
  <React.StrictMode>
    <App dataPlaces={dataPlaces}/>
  </React.StrictMode>
);
