import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import classnames from 'classnames';

import sortIconAsc from '../../assets/icon/sortIconAsc.png';
import sortIconDesc from '../../assets/icon/sortIconDesc.png';

import { setSortOptionAsc } from '../../store/slices/sort-slice';
import s from './sort-button.module.scss';

type SortButtonPropsType = {
    isSearchOpen: boolean
}

export const SortButton: FC<SortButtonPropsType> = ({ isSearchOpen }) => {
    const dispatch = useDispatch();
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
        <button className={sortButtonStyle} onClick={onClickSortRating} type='button'>
            <img src={sortIconSrc} className={s.sortIcon} alt='sortIcon' />
            <span className={s.sortOption}>По рейтингу</span>
        </button>
    )
}