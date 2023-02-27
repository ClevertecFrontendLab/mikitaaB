import { FC, memo, useEffect, useRef, useState } from 'react';
import classnames from 'classnames';

import { Link } from 'react-router-dom';

import s from './header.module.scss';

import avatar from '../../assets/logo/avatar.png';
import cleverlandLogo from '../../assets/logo/cleverlandLogo.png';
import { MenuBlock } from '../menu-block';

export const Header: FC = memo(() => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const onToggleBurgerMenu = () => setIsMenuOpen(!isMenuOpen);
	const buttonClass = classnames({
		[s.burgerMenu]: true,
		[s.closeMenuButton]: isMenuOpen
	});
	const closeMenuHandler = () => setIsMenuOpen(false);
	const burgerMenuBtnRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (isMenuOpen) {
			document.body.classList.add(`${s.forbidScroll}`);
		} else {
			document.body.classList.remove(`${s.forbidScroll}`);
		}
	}, [isMenuOpen]);

	return (
		<header className={s.header}>
			<div className={s.logoTitleHeader}>
				<Link to='/' className={s.logo}>
					<img src={cleverlandLogo} alt='logo' />
				</Link>
				<div>
					<button type='button' onClick={onToggleBurgerMenu} ref={burgerMenuBtnRef}
						className={buttonClass} data-test-id='button-burger'>
						<span className={s.toggleMenuButton} />
						<span className={s.toggleMenuButton} />
						<span className={s.toggleMenuButton} />
					</button>
					{isMenuOpen && <MenuBlock isMenuOpen={isMenuOpen} burgerMenuBtnRef={burgerMenuBtnRef}
						closeMenuHandler={closeMenuHandler} />}
				</div>
				<span className={s.title}>Библиотека</span>
			</div>
			<div className={s.profile}>
				<span className={s.helloText}>Привет, Иван!</span>
				<img className={s.avatar} src={avatar} alt='avatar' />
			</div>
		</header>
	)
})