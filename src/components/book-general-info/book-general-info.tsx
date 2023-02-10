import { FC } from 'react';

import { SwiperImages } from '../swiper';

import noBookImage from '../../assets/image/noBookImage.png';
import { BookButton } from '../book-button';

import s from './book-general-info.module.scss';

type ImageBookType = {
    id: number,
    src: string
}
type BookGeneralInfoType = {
    author: string,
    isBooked: boolean,
    bookedTill: string,
    image: ImageBookType[],
    title: string,
    year: number
}

export const BookGeneralInfo: FC<BookGeneralInfoType> = ({ author, isBooked, bookedTill, image, title, year }) => {
    const authorStr = author ? `${author}, ` : '';
    const authorYear = `${authorStr}${year}`;
    const zeroSingleImageSrc = image.length ? image[0].src : noBookImage;

    return (
        <section className={s.bookGeneralInfoSection}>
            <div className={s.imageContainer}>
                {
                    image.length > 1 ?
                        <SwiperImages images={image} /> :
                        <img className={s.image} src={zeroSingleImageSrc} alt='no-book' />
                }
            </div>
            <div className={s.generalInfo}>
                <div className={s.bookGeneralInfoTitle}>{title}</div>
                <div className={s.authorYearInfo}>{authorYear}</div>
                <div className={s.bookButton}>
                    <BookButton isBooked={isBooked} bookedTill={bookedTill} />
                </div>
            </div>
            <div className={s.descriptionContent}>
                <div className={s.aboutBook}>О книге</div>
                <p className={s.descriptionBook}>
                    Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то
                    решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута,
                    изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое
                    время?
                </p>
                <p className={s.descriptionBook}>
                    Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать
                    алгоритмы — это веселое и увлекательное занятие.
                </p>
            </div>
        </section>
    );
};