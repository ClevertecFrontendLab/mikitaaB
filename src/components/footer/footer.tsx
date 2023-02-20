import { FC } from 'react';

import { logoIcons } from '../../mocks';

import s from './footer.module.scss';

export const Footer: FC = () => {
    const footerText = '© 2020-2023 Cleverland. Все права защищены.';

    return (
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
    );
};