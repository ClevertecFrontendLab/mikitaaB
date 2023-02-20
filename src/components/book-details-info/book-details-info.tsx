import { FC, useState } from 'react';

import s from './book-details-info.module.scss';

type BookDetailsInfoType = {
    publish: string,
    pages: string,
    cover: string,
    producer: string,
    format: string,
    isbn: string,
    weight: string,
    issueYear: string,
    categories: string[]
}

export const BookDetailsInfo: FC<BookDetailsInfoType> = (props) => {
    const {publish, pages, cover, producer, format, isbn, weight, issueYear, categories } = props;

    return (
        <div className={s.bookDetailsInfoSection}>
            <div className={s.detailsInfoTitle}>Подробная информация</div>
            <div className={s.detailsTable}>
                <div className={s.columnDetails}>
                    <div className={s.rowDetails}>
                        <div className={s.keyDetails}>Издательство</div>
                        <div className={s.valueDetails}>{publish}</div>
                    </div>
                    <div className={s.rowDetails}>
                        <div className={s.keyDetails}>Год издания</div>
                        <div className={s.valueDetails}>{issueYear}</div>
                    </div>
                    <div className={s.rowDetails}>
                        <div className={s.keyDetails}>Страниц</div>
                        <div className={s.valueDetails}>{pages}</div>
                    </div>
                    <div className={s.rowDetails}>
                        <div className={s.keyDetails}>Переплёт</div>
                        <div className={s.valueDetails}>{cover}</div>
                    </div>
                    <div className={s.rowDetails}>
                        <div className={s.keyDetails}>Формат</div>
                        <div className={s.valueDetails}>{format}</div>
                    </div>
                </div>
                <div className={s.columnDetails}>
                    <div className={s.rowDetails}>
                        <div className={s.keyDetails}>Жанр</div>
                        <div className={s.valueDetails}>{categories.join(', ')}</div>
                    </div>
                    <div className={s.rowDetails}>
                        <div className={s.keyDetails}>Вес</div>
                        <div className={s.valueDetails}>{weight}</div>
                    </div>
                    <div className={s.rowDetails}>
                        <div className={s.keyDetails}>ISBN</div>
                        <div className={s.valueDetails}>{isbn}</div>
                    </div>
                    <div className={s.rowDetails}>
                        <div className={s.keyDetails}>Изготовитель</div>
                        <div className={s.valueDetails}>{producer}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};