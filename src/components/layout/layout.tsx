import { FC } from 'react';

import { Outlet } from 'react-router-dom';

import { Header } from '../header';
import { Footer } from '../footer';

import s from './layout.module.scss';

export const Layout: FC = () => (
    <div className={s.layoutPage}>
        <Header />
        <Outlet />
        <Footer />
    </div>
);