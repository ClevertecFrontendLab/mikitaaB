import { FC } from 'react';

import { ReactComponent as ListViewIcon } from '../../../assets/icon/listViewIcon.svg';

import s from './list-view-button.module.scss';

type ListViewButtonPropsType = {
    isListView: boolean,
    clickCallback: () => void
}

export const ListViewButton: FC<ListViewButtonPropsType> = ({ isListView, clickCallback }) => {
    const onClickListView = () => clickCallback();
    const listViewButtonClassName = isListView ? s.listViewActive : s.listView;

    return (
        <button
            className={listViewButtonClassName}
            data-test-id='button-menu-view-list'
            onClick={onClickListView}
            type='button'>
            <ListViewIcon />
        </button>
    )
}