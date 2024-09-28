import { PlaceType } from '../../shared';


interface ICardProps {
    isPremium: boolean;
    imgSrc: string;
    priceValue: number;
    isInBookmark: boolean;
    rating: number;
    name: string;
    typePlace: PlaceType;
}

export default function Card (props: ICardProps): JSX.Element {
  return (
    <article className="cities__card place-card">
      {props.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={props.imgSrc}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{props.priceValue}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${props.isInBookmark ? 'place-card__bookmark-button--active' : ''} button`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{props.isInBookmark ? 'In' : 'To'} bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${props.rating}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">
            {props.name}
          </a>
        </h2>
        <p className="place-card__type">{props.typePlace}</p>
      </div>
    </article>
  );
}
