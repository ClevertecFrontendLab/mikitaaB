import { FC, memo } from 'react';

import s from './card.module.scss';

import { BookButton } from '../book-button';
import { RatingInfo } from '../rating-info';

import noBookImage from '../../assets/image/noBookImage.png';
import { BookingType, DeliveryType, ImageType } from '../../types';
import { host } from '../../constants';
import { HighlightText } from '../highlight-text';

type CardPropsType = {
    authors: string[],
    title: string,
    booking: BookingType | null,
    delivery: DeliveryType | null,
    image: ImageType | null
    isListView: boolean,
    rating: number | null,
    issueYear: string
}

export const Card: FC<CardPropsType> = memo((props) => {
    const { authors, title, booking, image, delivery, isListView, rating, issueYear } = props;
    const authorStr = authors ? `${authors}, ` : '';
    const authorYear = `${authorStr}${issueYear}`;
    const containerClassName = isListView ? s.listView : s.gridView;
    const imageSrc: string = image?.url ? `${host}${image.url}` : noBookImage;

    return (
        <div data-test-id='card' className={containerClassName}>
            <div className={s.imageContainer}>
                <img src={imageSrc} className={s.image} alt='bookImage' />
            </div>
            <div className={s.bookDescription}>
                <div className={s.ratingContainer}>
                    {
                        rating ?
                            <RatingInfo rating={rating} /> :
                            <span className={s.noRating}>ещё нет оценок</span>
                    }
                </div>
                <div className={s.bookTitle}>
                    <HighlightText title={title} />
                </div>
                <div className={s.authorYear}>{authorYear}</div>
                <div className={s.bookButton}>
                    <BookButton booking={booking} delivery={delivery} />
                </div>
            </div>
        </div>
    );
})