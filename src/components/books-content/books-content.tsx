import { FC } from 'react';
import { Link } from 'react-router-dom';

import s from './books-content.module.scss';

import { booksData } from '../../mocks';
import { Card } from '../card';

type BooksContentPropsType = {
    isListView: boolean
}

export const BooksContent: FC<BooksContentPropsType> = ({ isListView }) => {
    const contentContainer = isListView ? s.listContainer : s.gridContainer;

    return (
        <div className={contentContainer}>
            {
                booksData.map(book => (
                    <Link key={book.id} to={`/books/${book.category}/${book.id}`}>
                        <Card
                            key={book.id}
                            author={book.author}
                            title={book.title}
                            bookedTill={book.bookedTill}
                            image={book.image}
                            isBooked={book.isBooked}
                            isListView={isListView}
                            rating={book.rating}
                            year={book.year}
                        />
                    </Link>
                ))
            }
        </div>
    )
};