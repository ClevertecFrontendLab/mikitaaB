import { FC } from 'react';

import s from './book-button.module.scss';

type BookButtonType = {
    isBooked: boolean,
    bookedTill: string
}

export const BookButton: FC<BookButtonType> = ({ isBooked, bookedTill }) => {
    let buttonText;
    let buttonClassName;

    if (isBooked || bookedTill) {
        const bookDate = new Date(bookedTill);
        const bookDay = new Intl.DateTimeFormat('en', {
            'day': '2-digit'
        }).format(bookDate);
        const bookMonth = new Intl.DateTimeFormat('en', {
            'month': '2-digit'
        }).format(bookDate);

        buttonText = isBooked ? 'ЗАБРОНИРОВАНА' : `ЗАНЯТА ДО ${bookDay}.${bookMonth}`;
        buttonClassName = s.disabledButton;
    } else {
        buttonText = 'ЗАБРОНИРОВАТЬ';
        buttonClassName = s.enabledButton;
    }

    return <button type='button' className={buttonClassName}>{buttonText}</button>;
};