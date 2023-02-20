import { FC } from 'react';

import { SwiperImages } from '../swiper';

import noBookImage from '../../assets/image/noBookImage.png';
import { BookButton } from '../book-button';

import s from './book-general-info.module.scss';
import { BookingType, DeliveryType, ImageType } from '../../types';
import { host } from '../../constants';

type BookGeneralInfoType = {
    authors: string[],
    images: ImageType[],
    title: string,
    description: string,
    issueYear: string,
    booking: BookingType | null,
    delivery: DeliveryType | null
}

export const BookGeneralInfo: FC<BookGeneralInfoType> = (props) => {
    const { authors, images, title, description, issueYear, booking, delivery } = props;
    const authorStr = authors ? `${authors}, ` : '';
    const authorYear = `${authorStr}${issueYear}`;
    const zeroSingleImageSrc = images.length ? `${host}${images[0].url}` : noBookImage;

    return (
        <section className={s.bookGeneralInfoSection}>
            <div className={s.imageContainer}>
                {
                    images.length > 1 ?
                        <SwiperImages images={images} /> :
                        <img className={s.image} src={zeroSingleImageSrc} alt='no-book' />
                }
            </div>
            <div className={s.generalInfo}>
                <div className={s.bookGeneralInfoTitle}>{title}</div>
                <div className={s.authorYearInfo}>{authorYear}</div>
                <div className={s.bookButton}>
                    <BookButton booking={booking} delivery={delivery} />
                </div>
            </div>
            <div className={s.descriptionContent}>
                <div className={s.aboutBook}>О книге</div>
                <p className={s.descriptionBook}>
                    {description}
                </p>
            </div>
        </section>
    );
};