import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BooksContent } from '../../components/books-content';
import { Error } from '../../components/error';
import { Loader } from '../../components/loader';
import { NavigationList } from '../../components/navigation-list';

import { AppDispatch, RootStore } from '../../store/store';
import { getBooksThunk } from '../../store/slices/books-slice';

import s from './main-page.module.scss';

export const MainPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [isListView, setIsListView] = useState(false);
    const onSwitchViewOption = () => setIsListView(!isListView);

    const booksStatusLoading = useSelector<RootStore, string | null>((state: RootStore) => state.books.status);

    useEffect(() => {
        dispatch(getBooksThunk())
    }, [dispatch]);

    if (!booksStatusLoading || booksStatusLoading === 'failed') {
        return <Error />
    }

    if (booksStatusLoading === 'loading') {
        return <Loader />
    }

    return (
        <section className={s.mainPage}>
            <NavigationList isListView={isListView} switchViewOption={onSwitchViewOption} />
            <BooksContent isListView={isListView} />
        </section>
    )
};