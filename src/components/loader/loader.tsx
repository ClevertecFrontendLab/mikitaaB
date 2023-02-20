import { FC } from 'react';

import s from './loader.module.scss';

export const Loader: FC = () => (
    <div className={s.loaderContainer}>
        <div className={s.loader} />
    </div>
)