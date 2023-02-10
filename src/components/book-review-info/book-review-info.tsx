import { FC, useState } from 'react';

import { reviewDataTemplate } from '../../mocks';
import { BookReviewItem } from '../book-review-item';
import reviewBlackArrow from '../../assets/icon/reviewBlackArrow.png';

import s from './book-review-info.module.scss';

export const BookReviewInfo: FC = () => {
    const [reviewData] = useState(reviewDataTemplate);
    const [isShowReview, setIsShowReview] = useState(true);
    const reviewIconStyle = isShowReview ? s.collapseReviewImgActive : s.collapseReviewImg;
    const onClickToggleReview = () => setIsShowReview(!isShowReview);

    return (
        <div className={s.reviewInfoContainer}>
            <div className={s.reviewTitle}>
                <span className={s.reviewTitleText}>Отзывы</span>
                <span className={s.reviewCount}>{reviewData.length}</span>
                <button type='button' data-test-id='button-hide-reviews'
                    onClick={onClickToggleReview} className={s.collapseReviewButton}>
                    <img src={reviewBlackArrow} className={`reviewIconStyle ${s.collapseReviewIcon}`} alt='review-arrow' />
                </button>
            </div>
            {
                isShowReview && <div className={s.reviewContainer}>
                    {
                        reviewData.map(el => (
                            <BookReviewItem
                                key={el.id}
                                userPhoto={el.userPhoto}
                                userName={el.userName}
                                rating={el.rating}
                                date={el.date}
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