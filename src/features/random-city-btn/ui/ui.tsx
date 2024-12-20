import { Link } from 'react-router-dom';
import { RoutesEnum } from '../../../shared/config';
import { useMemo } from 'react';
import { Cities } from '../../../shared/api';
import { useAppDispatch } from '../../../shared/lib';
import { changeCity } from '../../../entities/offer';

const citiesArray = Object.values(Cities);
export default function RandomCityBtn() {
  const randomCityId = useMemo(()=>Math.floor(Math.random() * citiesArray.length),[]);
  const dispatch = useAppDispatch();
  const handleBtnClick = () => {
    dispatch(changeCity(citiesArray[randomCityId]));
  };
  return(
    <Link data-testid='location_item-link' className="locations__item-link" to={RoutesEnum.MAIN} onClick={handleBtnClick}>
      <span>{citiesArray[randomCityId]}</span>
    </Link>
  );
}
