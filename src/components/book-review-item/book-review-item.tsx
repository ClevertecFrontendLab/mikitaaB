import { FC } from 'react';
import { RatingInfo } from '../rating-info';

import s from './book-review-item.module.scss';

type BookReviewItemPropsType = {
    userPhoto: string
    userName: string,
    rating: number
    date: string,
    text: string | null
}

export const BookReviewItem: FC<BookReviewItemPropsType> = (props) => {
    const { userPhoto, userName, rating, date, text } = props;

    return (
        <div className={s.reviewItemContainer}>
            <div className={s.reviewTitleContainer}>
                <div className={s.userNamePhoto}>
                    <img src={userPhoto} alt='userPhoto' />
                </div>
                <div className={s.userName}>{userName}</div>
                <div className={s.date}>{date}</div>
            </div>
            <div className={s.rating}>
                <RatingInfo rating={rating} />
            </div>
            {
                text ? <div className={s.reviewText}>{text}</div> : ''
            }
        </div>
    );
};