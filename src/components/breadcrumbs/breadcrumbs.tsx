import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';

import s from './breadcrumbs.module.scss';

export const Breadcrumbs: FC = () => {
    const { categoryPath, bookId } = useParams();

    const categoryName = 'Бизнес';
    const bookTitle = 'Грокаем алгоритмы';
    const delimiter = ' / ';

    return (
        <div className={s.breadcrumbsContainer}>
            <Link to={`/books/${categoryPath}`}>{categoryName}</Link>
            <span className={s.space}>{delimiter}</span>
            <Link to={`/books/${categoryPath}/${bookId}`}>{bookTitle}</Link>
        </div>
    );
}