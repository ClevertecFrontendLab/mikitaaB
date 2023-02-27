import { FC, memo, useState } from 'react';
import classnames from 'classnames';

import { GridViewButton } from '../view-buttons/grid-view-button';
import { ListViewButton } from '../view-buttons/list-view-button';
import { SearchInput } from '../search-input';
import { SortButton } from '../sort-button';

import s from './navigation-list.module.scss';

type NavigationListPropsType = {
    isListView: boolean,
    switchViewOption: () => void
}

export const NavigationList: FC<NavigationListPropsType> = memo(({ isListView, switchViewOption }) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const switchViewStyle = classnames({
		[s.switchView]: true,
		[s.hideSwitchViewBtns]: isSearchOpen
	});
    const searchSortBarStyle = classnames({
		[s.searchSortBar]: true,
		[s.searchSortBarActive]: isSearchOpen
	});
    const onClickSearchInput = () => setIsSearchOpen(!isSearchOpen);

    return (
        <div className={s.navigationListBar}>
            <div className={searchSortBarStyle}>
                <SearchInput handleClick={onClickSearchInput} isSearchOpen={isSearchOpen} />
                <SortButton isSearchOpen={isSearchOpen} />
            </div>
            <div className={switchViewStyle}>
                <GridViewButton isListView={isListView} clickCallback={switchViewOption} />
                <ListViewButton isListView={isListView} clickCallback={switchViewOption} />
            </div>
        </div>
    )
})