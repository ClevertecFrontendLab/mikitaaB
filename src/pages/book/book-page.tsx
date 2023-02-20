import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BookDetailsInfo } from '../../components/book-details-info';
import { BookGeneralInfo } from '../../components/book-general-info';
import { BookReviewInfo } from '../../components/book-review-info';
import { Breadcrumbs } from '../../components/breadcrumbs';
import { RatingInfo } from '../../components/rating-info';

import { AppDispatch, RootStore } from '../../store/store';
import { BookDetailStateType, BookDetailType, CategoriesStateType, CategoryType, StatusType } from '../../types';
import { getBookThunk } from '../../store/slices/book-slice';
import { Error } from '../../components/error';
import { Loader } from '../../components/loader';

import s from './book-page.module.scss';
import { getCategoriesThunk } from '../../store/slices/categories-slice';

export const BookPage: FC = () => {
    const { bookId } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const bookDetailData = useSelector<RootStore, BookDetailStateType>((state: RootStore) => state.book);
    const bookData: BookDetailType | null = bookDetailData.book;
    const bookStatusLoading: StatusType = bookDetailData.status;

    useEffect(() => {
        dispatch(getBookThunk((Number(bookId))));
    }, [bookId, dispatch]);

    const isBookLoadFailed = !bookStatusLoading || bookStatusLoading === 'failed';
    const isBookLoading = bookStatusLoading === 'loading';

    return (
        <section className={s.bookPage}>
            <Breadcrumbs />
            { isBookLoadFailed && <div className={s.errorContainer}><Error /></div> }
            { isBookLoading && <Loader /> }
            {
                (!!bookData && ('id' in bookData)) ?
                    (
                        <div className={s.wrapperContainer}>
                            <BookGeneralInfo authors={bookData.authors} images={bookData.images} title={bookData.title}
                                description={bookData.description}
                                issueYear={bookData.issueYear} booking={bookData.booking} delivery={bookData.delivery} />
                            <div className={s.ratingContainer}>
                                <span className={s.ratingInfoClass}>Рейтинг</span>
                                <div className={s.starValueRating}>
                                    {
                                        bookData.rating ?
                                            <>
                                                <RatingInfo rating={bookData.rating} />
                                                <span className={s.ratingValue}>{bookData.rating}</span>
                                            </> :
                                            <span className={s.noRating}>ещё нет оценок</span>
                                    }
                                </div>
                            </div>
                            <BookDetailsInfo publish={bookData.publish} pages={bookData.pages}
                                producer={bookData.producer} format={bookData.format} isbn={bookData.ISBN}
                                categories={bookData.categories}
                                weight={bookData.weight} issueYear={bookData.issueYear} cover={bookData.cover} />
                            <BookReviewInfo comments={bookData.comments} />
                        </div>
                    ) :
                    <div />
            }
        </section>
    )
};