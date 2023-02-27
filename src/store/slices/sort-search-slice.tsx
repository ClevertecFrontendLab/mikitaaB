/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { SortStateType } from '../../types';

const initialState: SortStateType = {
    sortOptionAsc: true,
    searchValue: ''
}

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSortOptionAsc: (state) => {
            state.sortOptionAsc = !state.sortOptionAsc;
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        }
    }
});

export const { setSortOptionAsc, setSearchValue } = sortSlice.actions;
export const { reducer } = sortSlice;