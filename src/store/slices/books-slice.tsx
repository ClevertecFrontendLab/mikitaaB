/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { BookInterface } from '../../types';

const apiBooks = 'https://strapi.cleverland.by/api/books';

export const getBooksThunk = createAsyncThunk(
    'books', async (): Promise<BookInterface[]> => {
        const booksData = await axios.get(apiBooks).then(response => response.data);

        return booksData;
    }
)

type BooksStateType = {
    books: BookInterface[],
    status: string | null
}

const initialState: BooksStateType = {
    books: [],
    status: null
}

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBooksThunk.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(getBooksThunk.fulfilled, (state, action) => {
            state.books = action.payload
            state.status = 'resolved';
        });
        builder.addCase(getBooksThunk.rejected, (state) => {
            state.books = [];
            state.status = 'failed';
        })
    }
});

export const { reducer } = booksSlice;