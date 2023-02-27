import { FC, memo } from 'react';

import { ReactComponent as GridViewIcon } from '../../../assets/icon/gridViewIcon.svg';

import s from './grid-view-button.module.scss';

type GridViewButtonPropsType = {
    isListView: boolean,
    clickCallback: () => void
}

export const GridViewButton: FC<GridViewButtonPropsType> = memo(({ isListView, clickCallback }) => {
    const onClickGridView = () => clickCallback();
    const gridViewButtonClassName = isListView ? s.gridView : s.gridViewActive;

    return (
        <button
            className={gridViewButtonClassName}
            data-test-id='button-menu-view-window'
            onClick={onClickGridView}
            type='button'>
            <GridViewIcon />
        </button>
    )
})