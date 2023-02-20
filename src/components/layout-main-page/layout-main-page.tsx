import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from '../sidebar/sidebar';
import s from './layout-main-page.module.scss';

export const LayoutMainPage: FC = () => (
    <div className={s.layoutMainPage}>
        <div className={s.sidebarStyle}>
            <Sidebar />
        </div>
        <Outlet />
    </div>
);