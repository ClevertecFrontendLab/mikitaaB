/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { CategoriesStateType, CategoryType } from '../../types';

const apiCategories = 'https://strapi.cleverland.by/api/categories';

export const getCategoriesThunk = createAsyncThunk(
    'categories', async (): Promise<CategoryType[]> => {
        const categoryData = await axios.get(apiCategories).then(response => response.data);

        return categoryData;
    }
)

const initialState: CategoriesStateType = {
    categories: [],
    status: null
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategoriesThunk.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(getCategoriesThunk.fulfilled, (state, action) => {
            state.categories = action.payload
            state.status = 'resolved';
        });
        builder.addCase(getCategoriesThunk.rejected, (state) => {
            state.categories = [];
            state.status = 'failed';
        })
    }
});

export const { reducer } = categoriesSlice;
export const actionsCategories = { getCategoriesThunk };