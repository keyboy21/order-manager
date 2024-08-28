import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../layout/root.layout';
import { HomePage } from '../routes/home/home.page'

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Suspense fallback={<div>Идет загрузка ...</div>}>
				<RootLayout />
			</Suspense>
		),
		children: [
			{
				path: '/',
				element: (
					<Suspense fallback={<div>Идет загрузка ...</div>}>
						<HomePage />
					</Suspense>
				),
			},
		],
	},
]);