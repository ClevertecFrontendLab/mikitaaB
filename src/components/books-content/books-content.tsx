import { FC } from 'react';
import { Link } from 'react-router-dom';

import s from './books-content.module.scss';

import { Card } from '../card';
import { BookInterface, CategoryType } from '../../types';

type BooksContentPropsType = {
    isListView: boolean,
    categories: CategoryType[],
    booksData: BookInterface[]
}

export const BooksContent: FC<BooksContentPropsType> = ({ isListView, categories, booksData }) => {
    const contentContainer = isListView ? s.listContainer : s.gridContainer;
    return (
        <div className={contentContainer}>
            {
                booksData.map(book => {
                    const bookCategory = categories.find(category => book.categories.some(bookCat => category.name.toLowerCase() === bookCat.toLowerCase()))?.path;

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
            }
        </div>
    )
};