export type PlaceType = 'Room' | 'Apartment';
export type CardType = {
    id: number;
    isPremium: boolean;
    imgSrc: string;
    priceValue: number;
    isInBookmark: boolean;
    rating: number;
    name: string;
    typePlace: PlaceType;
  };
