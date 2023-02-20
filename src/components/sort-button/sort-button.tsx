import classnames from 'classnames';
import { FC } from 'react';

import sortIcon from '../../assets/icon/sortIcon.png';

import s from './sort-button.module.scss';

type SortButtonPropsType = {
    isSearchOpen: boolean
}

export const SortButton: FC<SortButtonPropsType> = ({ isSearchOpen }) => {
    const sortButtonStyle = classnames({
		[s.sortButton]: true,
		[s.hideSortButton]: isSearchOpen
	});

    return (
        <button className={sortButtonStyle} type='button'>
            <img src={sortIcon} className={s.sortIcon} alt='sortIcon' />
            <span className={s.sortOption}>По рейтингу</span>
        </button>
    )
}