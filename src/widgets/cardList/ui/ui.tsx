import {useState} from 'react';
import { CardOffer } from '../../../components';
import { OfferType } from '../../../shared/interface';


interface IOffersListProps {
  offersMockData: OfferType[];
}

export default function OffersList({offersMockData}: IOffersListProps) {
  const [activeOffer, setActiveOffer] = useState<string>('');
  const onActiveOfferChangeCallback = (id: string) => {
    setActiveOffer(id);
  };
  return (
    <div className="cities__places-list places__list tabs__content" onMouseLeave={()=>setActiveOffer('')}>
      {offersMockData.map((el) => (<CardOffer offer = {el} key={el.id} onMouseEnterCallback={onActiveOfferChangeCallback}/>))}
    </div>
  );
}
