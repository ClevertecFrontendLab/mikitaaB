import { FC, useState, MouseEvent, useEffect } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import classnames from 'classnames';

import { booksCategoryItems } from '../../mocks';
import menuArrowIcon from '../../assets/icon/menuArrowIcon.png';

import s from './sidebar.module.scss';

type SidebarPropsType = {
	isMenuOpen?: boolean,
	closeMenuHandler?: () => void
}

type NavLinkProps = {
	isActive: boolean
}
type PathTypes = '/books' | '/terms' | '/contract' | '/profile';

export const Sidebar: FC<SidebarPropsType> = ({ isMenuOpen, closeMenuHandler }) => {
	const location = useLocation();
	const [isShowcaseOpen, setIsShowcaseOpen] = useState(true);
	const { category } = useParams();
	const getNavItemStyle = (path: PathTypes) => location.pathname.includes(path) ? s.navItemActive : s.navItem;
	const menuItemActive = ({ isActive }: NavLinkProps) => isActive ? s.activeItem : '';
	const onClickMenuItem = () => {
		closeMenuHandler?.();
	}

	useEffect(() => {
		if (location.pathname !== '/' && !category ) {
			setIsShowcaseOpen(false);
		}
	}, [category, location.pathname]);

	const showcaseIconStyle = classnames({
		[isShowcaseOpen ? s.showcaseIconActive : s.showcaseIcon]: true,
		[s.hideElement]: !location.pathname.includes('books')
	});
	const onClickShowcase = (e: MouseEvent) => {
		if (category) {
			setIsShowcaseOpen(!isShowcaseOpen);
			e.preventDefault();
		}
	}
	const bookCategoriesStyle = classnames({
		[s.booksCategories]: true,
		[s.hideElement]: !isShowcaseOpen
	});

	return (
		<aside>
			<nav className={s.navMenu}>
				<ul className={s.listItemsStyle}>
					<li className={getNavItemStyle('/books')}>
						<NavLink to='/books/all' className={s.toggleShowcaseButton} onClick={onClickShowcase}
							data-test-id={isMenuOpen ? 'burger-showcase' : 'navigation-showcase'}>
							Витрина книг
							<div className={s.arrowIconBlock}>
								<img src={menuArrowIcon} className={showcaseIconStyle} alt='arrow-menu' />
							</div>
						</NavLink>
					</li>
					<ul className={bookCategoriesStyle}>
						{
							booksCategoryItems.map(el => (
								<li key={el.id}>
									<NavLink to={el.route} className={menuItemActive} onClick={onClickMenuItem}
										data-test-id={el.category === 'all' ? 'burger-books' : 'navigation-books'}>
										<span>{el.name}</span>
										<span className={s.categoryCount}>{el.count}</span>
									</NavLink>
								</li>
							))
						}
					</ul>
					<li className={getNavItemStyle('/terms')}>
						<NavLink to='/terms' className={menuItemActive}
							onClick={onClickMenuItem}
							data-test-id={isMenuOpen ? 'burger-terms' : 'navigation-terms'}>
							Правила пользования
						</NavLink>
					</li>
					<li className={getNavItemStyle('/contract')}>
						<NavLink to='/contract' className={menuItemActive}
							onClick={onClickMenuItem}
							data-test-id={isMenuOpen ? 'burger-contract' : 'navigation-contract'}>
							Договор оферты
						</NavLink>
					</li>
					<div className={s.menuAuthContainer}>
						<li className={getNavItemStyle('/profile')}>
							<NavLink to='/profile' className={menuItemActive} onClick={onClickMenuItem}>
								Профиль
							</NavLink>
						</li>
						<li className={s.navItem}>
							<NavLink to='/logout' className={menuItemActive} onClick={onClickMenuItem}>
								Выход
							</NavLink>
						</li>
					</div>
				</ul>
			</nav>
		</aside >
	);
};