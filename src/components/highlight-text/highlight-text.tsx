import { FC } from 'react';
import { useSearch } from '../../hooks/use-search';

import s from './highlight-text.module.scss';

type HighlightTextPropsType = {
    title: string
}

export const HighlightText: FC<HighlightTextPropsType> = ({ title }) => {
    const { searchValue } = useSearch();
    const searchIndex: number = title.toLowerCase().indexOf(searchValue.toLowerCase());
    const bookTitle = [
        title.substring(0, searchIndex),
        <span className={s.highlight} data-test-id='highlight-matches'>
            { title.substring(searchIndex, searchIndex + searchValue.length) }
        </span>,
        title.substring(searchIndex + searchValue.length)
    ];

    return <span>{bookTitle}</span>
}