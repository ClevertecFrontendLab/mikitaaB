import { combineReducers } from 'redux';

import { reducer as bookReducer } from './book-slice';
import { reducer as booksReducer } from './books-slice';
import { reducer as categoryReducer } from './categories-slice';

export const rootReducer = combineReducers({
    book: bookReducer,
    books: booksReducer,
    category: categoryReducer
});