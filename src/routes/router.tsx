import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/layout/root.layout';
import { HomePage } from '@/routes/home/home.page'
import { LoginPage } from '@/routes/logIn/logIn.page'
import { AuthLayout } from '@/layout/auth.layout';

export const router = createBrowserRouter([
	{
		path: "/",
		element: <AuthLayout />,
		children: [
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
			}
		]
	},
	{
		path: '/login',
		element: (
			<Suspense fallback={<div>Идет загрузка ...</div>}>
				<LoginPage />
			</Suspense>
		)
	}
]);