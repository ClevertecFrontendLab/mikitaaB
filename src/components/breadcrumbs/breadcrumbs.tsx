import { FC } from 'react';
import { Link } from 'react-router-dom';

import s from './breadcrumbs.module.scss';

type BreadcrumbsPropsType = {
    bookId: string | undefined,
    categoryPath: string | undefined,
    category: string,
    title: string
}

export const Breadcrumbs: FC<BreadcrumbsPropsType> = ({ bookId, categoryPath, category, title }) => {
    const delimiter = ' / ';

    return (
        <div className={s.breadcrumbsContainer}>
            <Link to={`/books/${categoryPath}`}>{category}</Link>
            <span className={s.space}>{delimiter}</span>
            <Link to={`/books/${category}/${bookId}`}>{title}</Link>
        </div>
    );
}