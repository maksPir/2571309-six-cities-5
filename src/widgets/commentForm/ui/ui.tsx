
import {useState} from 'react';
import { ReviewType } from '../../../shared/api';


const initialState: ReviewType = {
  comment: '',
  rating: 0
};
const ratingData = [5,4,3,2,1];

export default function CommentForm() {
  const [reviewState, setReviewState] = useState<ReviewType>(initialState);
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
    Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {
          ratingData.map((el)=>(
            <>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={reviewState.rating}
                id={`${el}-stars`}
                type="radio"
                checked
                onClick={()=>{
                  setReviewState((prev)=>({...prev, rating: el}));
                }}
                key={el}
              />
              <label
                key={`${el}_label`}
                htmlFor={`${el}-stars`}
                className="reviews__rating-label form__rating-label"
                title="perfect"
              >
                <svg key={`${el}svg`} className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </>

          ))
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewState.comment}
        onChange={(e)=>{
          setReviewState((prev)=>({...prev, comment: e.target.value}));
        }}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
      To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay with
      at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={false}
          onClick={(e)=>{
            e.preventDefault();
            setReviewState(initialState);
          }}
        >
      Submit
        </button>
      </div>
    </form>
  );
}
