/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { BookDetailType } from '../../types';

const apiBookById = 'https://strapi.cleverland.by/api/books';

export const getBookThunk = createAsyncThunk(
    'book', async (bookId: number): Promise<BookDetailType[]> => {
        const bookData = await axios.get(`${apiBookById}/${bookId}`).then(response => response.data);

        return bookData;
    }
)

type BooksStateType = {
    book: BookDetailType[],
    status: string | null
}

const initialState: BooksStateType = {
    book: [],
    status: null
}

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBookThunk.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(getBookThunk.fulfilled, (state, action) => {
            state.book = action.payload
            state.status = 'resolved';
        });
        builder.addCase(getBookThunk.rejected, (state) => {
            state.book = [];
            state.status = 'failed';
        })
    }
});

export const { reducer } = bookSlice;