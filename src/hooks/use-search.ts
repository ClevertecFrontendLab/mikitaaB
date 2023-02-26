import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../store/slices/sort-search-slice';

import { AppDispatch, RootStore } from '../store/store';
import { SortStateType } from '../types';

export const useSearch = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { searchValue } = useSelector<RootStore, SortStateType>((state: RootStore) => state.sortSearch);

    const setSearchInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchValue(event.currentTarget.value))
    }

    return { searchValue, setSearchInputValue }
}