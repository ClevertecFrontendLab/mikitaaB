import { FC } from 'react';

import s from './card.module.scss';

import { BookButton } from '../book-button';
import { RatingInfo } from '../rating-info';

import noBookImage from '../../assets/image/noBookImage.png';

type ImageBookType = {
    id: number,
    src: string
}
type CardPropsType = {
    author: string,
    title: string,
    bookedTill: string,
    image: ImageBookType[],
    isBooked: boolean,
    isListView: boolean,
    rating: number,
    year: number
}

export const Card: FC<CardPropsType> = (props) => {
    const { author, title, bookedTill, image, isBooked, isListView, rating, year } = props;
    const authorStr = author ? `${author}, ` : '';
    const authorYear = `${authorStr}${year}`;
    const containerClassName = isListView ? s.listView : s.gridView;

    return (
        <div data-test-id='card' className={containerClassName}>
            <div className={s.imageContainer}>
                <img className={s.image} alt='bookImage'
                    src={image.length ? image[0].src : noBookImage} />
            </div>
            <div className={s.bookDescription}>
                <div className={s.ratingContainer}>
                    {
                        rating ?
                            <RatingInfo rating={rating} /> :
                            <span className={s.noRating}>ещё нет оценок</span>
                    }
                </div>
                <div className={s.bookTitle}>{title}</div>
                <div className={s.authorYear}>{authorYear}</div>
                <div className={s.bookButton}>
                    <BookButton isBooked={isBooked} bookedTill={bookedTill} />
                </div>
            </div>
        </div>
    );
};