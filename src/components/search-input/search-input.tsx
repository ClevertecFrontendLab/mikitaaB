import classnames from 'classnames';
import { FC } from 'react';

import searchIcon from '../../assets/icon/searchIcon.png';
import resetSearch from '../../assets/icon/resetSearch.png';

import s from './search-input.module.scss';

type SearchInputPropsType = {
    isSearchOpen: boolean,
    handleClick: () => void
}

export const SearchInput: FC<SearchInputPropsType> = ({ isSearchOpen, handleClick }) => {
    const onClickHandler = () => {
        handleClick();
    }
    const searchIconStyle = classnames({
        [s.searchIcon]: true,
        [s.hideElement]: isSearchOpen
    });
    const searchBarStyle = classnames({
        [s.searchBar]: true,
        [s.showSearchInput]: isSearchOpen
    });
    const resetSearchStyle = classnames({
        [s.resetSearch]: true,
        [s.hideElement]: !isSearchOpen
    });

    return (
        <div className={searchBarStyle} role='presentation'>
            <button type='button' data-test-id='button-search-open'
                onClick={onClickHandler} className={searchIconStyle}>
                <img src={searchIcon} alt='searchIcon' />
            </button>
            <input className={s.searchInput} placeholder='Поиск книги или автора ...'
                data-test-id='input-search' />
            <button type='button' data-test-id='input-search'
                onClick={onClickHandler} className={resetSearchStyle}>
                <img src={resetSearch} alt='reset-search' data-test-id='button-search-close' />
            </button>
        </div>
    )
}