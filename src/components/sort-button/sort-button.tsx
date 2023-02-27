import { FC, memo, useState } from 'react';
import { useDispatch } from 'react-redux';

import classnames from 'classnames';

import sortIconAsc from '../../assets/icon/sortIconAsc.png';
import sortIconDesc from '../../assets/icon/sortIconDesc.png';

import { setSortOptionAsc } from '../../store/slices/sort-search-slice';
import s from './sort-button.module.scss';
import { AppDispatch } from '../../store/store';

type SortButtonPropsType = {
    isSearchOpen: boolean
}

export const SortButton: FC<SortButtonPropsType> = memo(({ isSearchOpen }) => {
    const dispatch = useDispatch<AppDispatch>();
    const sortButtonStyle = classnames({
        [s.sortButton]: true,
        [s.hideSortButton]: isSearchOpen
    });
    const [isSortOptionAsc, setIsSortOptionAsc] = useState(true);
    const sortIconSrc = isSortOptionAsc ? sortIconAsc : sortIconDesc;

    const onClickSortRating = () => {
        dispatch(setSortOptionAsc());
        setIsSortOptionAsc(prevState => !prevState);
    };

    return (
        <button className={sortButtonStyle} onClick={onClickSortRating}
            data-test-id='sort-rating-button' type='button'>
            <img src={sortIconSrc} className={s.sortIcon} alt='sortIcon' />
            <span className={s.sortOption}>По рейтингу</span>
        </button>
    )
})