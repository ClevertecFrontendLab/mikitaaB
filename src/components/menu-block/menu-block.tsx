import { FC, memo, useEffect, useRef } from 'react';
import { Sidebar } from '../sidebar';

import s from './menu-block.module.scss';

type MenuBlockPropsType = {
    isMenuOpen: boolean,
    burgerMenuBtnRef: React.RefObject<any>,
    closeMenuHandler: () => void
}

export const MenuBlock: FC<MenuBlockPropsType> = memo(({ isMenuOpen, burgerMenuBtnRef, closeMenuHandler }) => {
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (navRef.current && burgerMenuBtnRef.current && !navRef.current.contains(e.target as Node) &&
                !burgerMenuBtnRef.current.contains(e.target)) {
                closeMenuHandler();
            }
        };

        document.addEventListener('click', handleClick);

        return () => document.removeEventListener('click', handleClick);
    }, [isMenuOpen, burgerMenuBtnRef, closeMenuHandler]);

    return (
        <div
            className={s.menuBlock}
            ref={navRef}
            data-test-id='burger-navigation'>
            <Sidebar isMenuOpen={isMenuOpen} closeMenuHandler={closeMenuHandler} />
        </div>
    )
})