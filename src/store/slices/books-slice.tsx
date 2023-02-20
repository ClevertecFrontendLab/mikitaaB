/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { apiBooksEndpoint } from '../../constants';
import { BookInterface, BooksStateType } from '../../types';

export const getBooksThunk = createAsyncThunk(
    'books', async (): Promise<BookInterface[]> => {
        const booksData = await axios.get(apiBooksEndpoint).then(response => response.data);

        return booksData;
    }
)

const initialState: BooksStateType = {
    books: [],
    status: 'idle'
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