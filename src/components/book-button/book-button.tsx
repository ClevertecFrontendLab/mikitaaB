import { FC, memo } from 'react';
import { BookingType, DeliveryType } from '../../types';

import s from './book-button.module.scss';

type BookButtonType = {
    booking: BookingType | null,
    delivery: DeliveryType | null
}

export const BookButton: FC<BookButtonType> = memo(({ booking, delivery }) => {
    let buttonText;
    let buttonClassName = s.disabledButton;

    if (booking?.order) {
        buttonText = 'ЗАБРОНИРОВАНА';
    }
    if (delivery?.handed) {
        const bookDate = new Date(delivery.dateHandedTo);
        const bookDay = new Intl.DateTimeFormat('en', {
            'day': '2-digit'
        }).format(bookDate);
        const bookMonth = new Intl.DateTimeFormat('en', {
            'month': '2-digit'
        }).format(bookDate);
        buttonText = `ЗАНЯТА ДО ${bookDay}.${bookMonth}`;
    }
    if (!booking && !delivery) {
        buttonText = 'ЗАБРОНИРОВАТЬ';
        buttonClassName = s.enabledButton;
    }

    return <button type='button' className={buttonClassName}>{buttonText}</button>;
});