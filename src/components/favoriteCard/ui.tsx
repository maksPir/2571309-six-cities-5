import { Link } from 'react-router-dom';
import { OfferType } from '../../shared/interface';


interface IFavoriteCardProps {
    offer: OfferType;
}

export default function FavoriteCard (props: IFavoriteCardProps): JSX.Element {
  return (
    <article className="favorites__card place-card">
      {props.offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={props.offer.previewImage}
            width={150}
            height={110}
            alt="Place image"
          />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{props.offer.price}</b>
            <span className="place-card__price-text">
                        /&nbsp;night
            </span>
          </div>
          <button
            className={`place-card__bookmark-button ${props.offer.isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{props.offer.isFavorite ? 'In' : 'To'} bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${props.offer.rating}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`../offer/${props.offer.id}`}>{props.offer.title}</Link>
        </h2>
        <p className="place-card__type">{props.offer.type}</p>
      </div>
    </article>
  );
}
