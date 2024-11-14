import { memo } from 'react';
import { useAppDispatch } from '../../../shared/lib';
import { IChangeFavoriteStatusBtnProps } from './types';
import { changeFavoriteStatus } from '../../../entities/offer/model/action';

function MemoFavoriteStatusBtn({offer}:IChangeFavoriteStatusBtnProps) {
  const dispatch = useAppDispatch();
  const btnClickHandler = () => {
    dispatch(changeFavoriteStatus({offerId: offer.id, status: +!offer.isFavorite}));
  };
  return(
    <button
      className={`place-card__bookmark-button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
      type="button"
      onClick={btnClickHandler}
    >
      <svg
        className="place-card__bookmark-icon"
        width={18}
        height={19}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{offer.isFavorite ? 'In' : 'To'} bookmarks</span>
    </button>
  );
}

export const FavoriteStatusBtn = memo(MemoFavoriteStatusBtn);
