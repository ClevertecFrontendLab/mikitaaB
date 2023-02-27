import { FC, memo } from 'react';
import { footerText } from '../../constants';

import { logoIcons } from '../../mocks';

import s from './footer.module.scss';

export const Footer: FC = memo(() => (
    <footer className={s.footer}>
        <span className={s.copyrightText}>{footerText}</span>
        <ul className={s.footerLogos}>
            {
                logoIcons.map(el => (
                    <li key={el.id}>
                        <a href={el.link} target='_blank' rel='noreferrer'>
                            <img src={el.src} alt={el.alt} />
                        </a>
                    </li>
                ))
            }
        </ul>
    </footer>
))