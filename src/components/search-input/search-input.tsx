import classnames from 'classnames';
import { FC, memo, useState } from 'react';

import resetSearch from '../../assets/icon/resetSearch.png';
import { ReactComponent as SearchIcon } from '../../assets/icon/searchIcon.svg';

import { useSearch } from '../../hooks/use-search';
import s from './search-input.module.scss';

type SearchInputPropsType = {
    isSearchOpen: boolean,
    handleClick: () => void
}

export const SearchInput: FC<SearchInputPropsType> = memo(({ isSearchOpen, handleClick }) => {
    const { searchValue, setSearchInputValue } = useSearch();
    const [isActiveSearchInput, setIsActiveSearchInput] = useState(false);

    const onClickHandler = () => {
        handleClick();
        setIsActiveSearchInput(prevState => !prevState);
    }
    const onBlurSearchInput = () => setIsActiveSearchInput(prevState => !prevState);
    const onFocusSearchInput = () => setIsActiveSearchInput(true);
    const searchIconStyle = classnames({
        [s.searchIcon]: true,
        [s.hideElement]: isSearchOpen,
        [s.searchIconActive]: isActiveSearchInput
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
                <SearchIcon />
            </button>
            <input className={s.searchInput}
                onBlur={onBlurSearchInput}
                onChange={setSearchInputValue}
                onFocus={onFocusSearchInput}
                placeholder='Поиск книги или автора…'
                value={searchValue}
                data-test-id='input-search' />
            <button type='button'
                onClick={onClickHandler} className={resetSearchStyle}>
                <img src={resetSearch} alt='reset-search' data-test-id='button-search-close' />
            </button>
        </div>
    )
})