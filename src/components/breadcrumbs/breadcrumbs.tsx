import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {categoryAllBooks} from '../../constants';
import { getBooksThunk } from '../../store/slices/books-slice';
import { AppDispatch, RootStore } from '../../store/store';
import { CategoriesStateType, CategoryType } from '../../types';

import s from './breadcrumbs.module.scss';

type BreadcrumbsPropsType = {
    categoryPath: string | undefined,
    bookId: number | undefined,
    bookTitle: string | undefined
}

export const Breadcrumbs: FC<BreadcrumbsPropsType> = (props) => {
    const { categoryPath, bookId, bookTitle } = props;
    const dispatch = useDispatch<AppDispatch>();
    const { currentCategory } = useSelector<RootStore, CategoriesStateType>((state: RootStore) => state.category);

    const delimiter = ' / ';
	const { categories: categoriesData } = useSelector<RootStore, CategoriesStateType>((state: RootStore) => state.category);

    const categoryName = (!currentCategory || currentCategory === 'all') ? categoryAllBooks :
    categoriesData.find((el: CategoryType) => el.path === currentCategory)?.name;

    return (
        <div className={s.breadcrumbsContainer}>
            <Link to={`/books/${currentCategory}`} data-test-id='breadcrumbs-link'
                className={s.linkStyle}>
                {categoryName}
            </Link>
            <span className={s.space}>{delimiter}</span>
            <Link to={`/books/${categoryPath}/${bookId}`} data-test-id='book-name'
                className={s.linkStyle}>
                {bookTitle}
            </Link>
        </div>
    );
}