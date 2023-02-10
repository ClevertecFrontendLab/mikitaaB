import { useState } from 'react';
import { BooksContent } from '../../components/books-content';
import { NavigationList } from '../../components/navigation-list';

import s from './main-page.module.scss';

export const MainPage = () => {
    const [isListView, setIsListView] = useState(false);
    const onSwitchViewOption = () => setIsListView(!isListView);

    return (
        <section className={s.mainPage}>
            <NavigationList isListView={isListView} switchViewOption={onSwitchViewOption} />
            <BooksContent isListView={isListView} />
        </section>
    )
};