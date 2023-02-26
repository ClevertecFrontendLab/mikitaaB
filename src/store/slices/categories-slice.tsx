/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { apiCategoriesEndpoint, categoryAllBooks } from '../../constants';
import { CategoriesStateType, CategoryType } from '../../types';

export const getCategoriesThunk = createAsyncThunk(
    'categories', async (): Promise<CategoryType[]> => {
        const categoryData = await axios.get(apiCategoriesEndpoint).then(response => response.data);

        return categoryData;
    }
)

const initialState: CategoriesStateType = {
    categories: [],
    currentCategory: categoryAllBooks,
    status: 'idle'
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCurrentCategory: (state, action: PayloadAction<string | undefined>) => {
            state.currentCategory = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCategoriesThunk.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(getCategoriesThunk.fulfilled, (state, action: PayloadAction<CategoryType[]>) => {
            state.categories = action.payload
            state.status = 'resolved';
        });
        builder.addCase(getCategoriesThunk.rejected, (state) => {
            state.categories = [];
            state.status = 'failed';
        })
    }
});

export const { setCurrentCategory } = categoriesSlice.actions;
export const { reducer } = categoriesSlice;