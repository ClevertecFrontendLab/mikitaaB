import { FC, useState } from 'react';

import { BookReviewItem } from '../book-review-item';
import reviewBlackArrow from '../../assets/icon/reviewBlackArrow.png';

import s from './book-review-info.module.scss';
import { CommentsType } from '../../types';

type BookReviewType = {
    comments: CommentsType[] | null
}

export const BookReviewInfo: FC<BookReviewType> = ({ comments }) => {
    const [isShowReview, setIsShowReview] = useState(true);
    const reviewIconStyle = isShowReview ? s.collapseReviewImgActive : s.collapseReviewImg;
    const onClickToggleReview = () => setIsShowReview(!isShowReview);

    return (
        <div className={s.reviewInfoContainer}>
            <div className={s.reviewTitle}>
                <span className={s.reviewTitleText}>Отзывы</span>
                <span className={s.reviewCount}>{comments ? comments.length : 0}</span>
                <button type='button' data-test-id='button-hide-reviews'
                    onClick={onClickToggleReview} className={s.collapseReviewButton}>
                    { !!comments && <img src={reviewBlackArrow} className={`reviewIconStyle ${s.collapseReviewIcon}`} alt='review-arrow' /> }
                </button>
            </div>
            {
                isShowReview && <div className={s.reviewContainer}>
                    {
                        comments && comments.map(el => (
                            <BookReviewItem
                                key={el.id}
                                userPhoto={el.user.avatarUrl}
                                userName={`${el.user.firstName} ${el.user.lastName}`}
                                rating={el.rating}
                                date={el.createdAt}
                                text={el.text}
                            />
                        ))
                    }
                </div>
            }
            <button type='button' className={s.rateBookButton} data-test-id='button-rating'>
                ОЦЕНИТЬ КНИГУ
            </button>
        </div>
    );
};