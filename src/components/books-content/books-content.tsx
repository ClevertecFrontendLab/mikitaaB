import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import s from './books-content.module.scss';

import { RootStore } from '../../store/store';
import { BooksStateType, CategoriesStateType, CategoryType, SortStateType } from '../../types';
import { Card } from '../card';

type BooksContentPropsType = {
    isListView: boolean
}

const NoBookByCategory = () => (
    <div className={s.emptyResultContainer}>
        <span className={s.emptyResult} data-test-id='empty-category'>В этой категории книг ещё нет</span>
    </div>
)

const NoBookByTitle = () => (
    <div className={s.emptyResultContainer}>
        <span className={s.emptyResult} data-test-id='search-result-not-found'>По запросу ничего не найдено</span>
    </div>
)

const sortNullValue = (rateValue: number | null) => rateValue === null ? 0 : rateValue;

export const BooksContent: FC<BooksContentPropsType> = ({ isListView }) => {
    const contentContainer = isListView ? s.listContainer : s.gridContainer;

    const { books: booksData } = useSelector<RootStore, BooksStateType>((state: RootStore) => state.books);
    const { categories: categoriesData } = useSelector<RootStore, CategoriesStateType>((state: RootStore) => state.category);
    const { sortOptionAsc, searchValue } = useSelector<RootStore, SortStateType>((state: RootStore) => state.sortSearch);
    const searchValueLower = searchValue.toLowerCase();

    const sortBooksData = [...booksData].sort((a, b) => sortOptionAsc ? sortNullValue(b.rating) - sortNullValue(a.rating) :
        sortNullValue(a.rating) - sortNullValue(b.rating));

    const { category: currentCategoryUrl } = useParams();
    const currentCategory = categoriesData.find((el: CategoryType) => el.path === currentCategoryUrl)?.name;
    const booksDataFilterByCat = currentCategory ? sortBooksData.filter(book => book.categories.includes(currentCategory!)) :
        sortBooksData;
    const booksDataFilterByTitle = booksDataFilterByCat.filter(book => book.title.toLowerCase().includes(searchValueLower));

    return (
        <div className={contentContainer}>
            {
                booksDataFilterByCat.length === 0 ? (
                    <NoBookByCategory />
                ) :
                    booksDataFilterByTitle.length === 0 ? (
                        <NoBookByTitle />
                    ) : (
                        booksDataFilterByTitle.map(book => {
                            const bookCategory = categoriesData.find((category: CategoryType) =>
                                book.categories.some(bookCat => category.name.toLowerCase() === bookCat.toLowerCase()))?.path;

                            return (
                                <Link key={book.id} to={`/books/${bookCategory}/${book.id}`}>
                                    <Card
                                        key={book.id}
                                        authors={book.authors}
                                        title={book.title}
                                        booking={book.booking}
                                        image={book.image}
                                        delivery={book.delivery}
                                        isListView={isListView}
                                        rating={book.rating}
                                        issueYear={book.issueYear}
                                    />
                                </Link>
                            )
                        })
                    )
            }
        </div>
    )
};