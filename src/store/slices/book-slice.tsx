/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiBooksEndpoint } from '../../constants';

import { BookDetailStateType, BookDetailType } from '../../types';

export const getBookThunk = createAsyncThunk(
    'book', async (bookId: number): Promise<BookDetailType> => {
        const bookData = await axios.get(`${apiBooksEndpoint}/${bookId}`).then(response => response.data);

        return bookData;
    }
)

const initialState: BookDetailStateType = {
    book: null,
    status: 'idle'
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
            state.book = action.payload;
            state.status = 'resolved';
        });
        builder.addCase(getBookThunk.rejected, (state) => {
            state.book = null;
            state.status = 'failed';
        })
    }
});

export const { reducer } = bookSlice;