import { Navigate, Route, Routes } from 'react-router-dom';

import { BookPage } from '../pages/book';
import { MainPage } from '../pages/main';
import { TermsPage } from '../pages/terms';

import { Layout } from '../components/layout';
import { LayoutMainPage } from '../components/layout-main-page';

export const Pages = () => (
	<div>
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route element={<LayoutMainPage />}>
					<Route path='/' element={<Navigate to='/books/all' />} />
					<Route path='/books/:category' element={<MainPage />} />
					<Route path='/terms' element={<TermsPage contentView='terms' />} />
					<Route path='/contract' element={<TermsPage contentView='contract' />} />
				</Route>
				<Route path='/books/:category/:bookId' element={<BookPage />} />
			</Route>
		</Routes>
	</div>
);