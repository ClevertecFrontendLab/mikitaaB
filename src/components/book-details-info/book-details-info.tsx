import { FC, useState } from 'react';

import s from './book-details-info.module.scss';

import { detailsInfoTemplate } from '../../mocks';

export const BookDetailsInfo: FC = () => {
    const [detailsInfo] = useState(detailsInfoTemplate);

    return (
        <div className={s.bookDetailsInfoSection}>
            <div className={s.detailsInfoTitle}>Подробная информация</div>
            <div className={s.detailsTable}>
                <div className={s.columnDetails}>
                    <div className={s.rowDetails}>
                        <div className={s.keyDetails}>Издательство</div>
                        <div className={s.valueDetails}>{detailsInfo.publishingHouse}</div>
                    </div>
                    <div className={s.rowDetails}>
                        <div className={s.keyDetails}>Год издания</div>
                        <div className={s.valueDetails}>{detailsInfo.year}</div>
                    </div>
                    <div className={s.rowDetails}>
                        <div className={s.keyDetails}>Страниц</div>
                        <div className={s.valueDetails}>{detailsInfo.binding}</div>
                    </div>
                    <div className={s.rowDetails}>
                        <div className={s.keyDetails}>Переплёт</div>
                        <div className={s.valueDetails}>{detailsInfo.binding}</div>
                    </div>
                    <div className={s.rowDetails}>
                        <div className={s.keyDetails}>Формат</div>
                        <div className={s.valueDetails}>{detailsInfo.size}</div>
                    </div>
                </div>
                <div className={s.columnDetails}>
                    <div className={s.rowDetails}>
                        <div className={s.keyDetails}>Жанр</div>
                        <div className={s.valueDetails}>{detailsInfo.genre}</div>
                    </div>
                    <div className={s.rowDetails}>
                        <div className={s.keyDetails}>Вес</div>
                        <div className={s.valueDetails}>{detailsInfo.weight}</div>
                    </div>
                    <div className={s.rowDetails}>
                        <div className={s.keyDetails}>ISBN</div>
                        <div className={s.valueDetails}>{detailsInfo.isbn}</div>
                    </div>
                    <div className={s.rowDetails}>
                        <div className={s.keyDetails}>Изготовитель</div>
                        <div className={s.valueDetails}>{detailsInfo.manufacturer}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};