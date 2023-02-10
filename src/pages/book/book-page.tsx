import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { BookDetailsInfo } from '../../components/book-details-info';
import { BookGeneralInfo } from '../../components/book-general-info';
import { BookReviewInfo } from '../../components/book-review-info';
import { Breadcrumbs } from '../../components/breadcrumbs';
import { RatingInfo } from '../../components/rating-info';

import { booksCategoryItems, booksData } from '../../mocks';

import s from './book-page.module.scss';

export const BookPage: FC = () => {
    const { category, bookId } = useParams();
    const bookRes = booksData.find(book => book.id === bookId);
    const categoryName: string = booksCategoryItems.find(cat => cat.category === category)?.name as string;

    return (!!bookRes && ('id' in bookRes)) ? (
        <section className={s.bookPage}>
            <Breadcrumbs categoryPath={category} bookId={bookId} category={categoryName} title={bookRes.title} />
            <div className={s.wrapperContainer}>
                <BookGeneralInfo author={bookRes?.author} image={bookRes?.image} title={bookRes?.title} year={bookRes?.year}
                    isBooked={bookRes?.isBooked} bookedTill={bookRes?.bookedTill} />
                <div className={s.ratingContainer}>
                    <span className={s.ratingInfoClass}>Рейтинг</span>
                    <div className={s.starValueRating}>
                        <RatingInfo rating={bookRes.rating} />
                        <span className={s.ratingValue}>{bookRes.rating}</span>
                    </div>
                </div>
                <BookDetailsInfo />
                <BookReviewInfo />
            </div>
        </section>
    ) : <div />;
};