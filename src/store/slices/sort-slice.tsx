/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { SortStateType } from '../../types';

const initialState: SortStateType = {
    sortOptionAsc: true
}

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSortOptionAsc: (state) => {
            state.sortOptionAsc = !state.sortOptionAsc;
        }
    }
});

export const { setSortOptionAsc } = sortSlice.actions;
export const { reducer } = sortSlice;