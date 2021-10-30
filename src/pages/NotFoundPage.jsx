import { lazy, Suspense } from 'react'

const NavBar = lazy(() => import('../components/NavBar'))
const NotFoundSection = lazy(() => import('../components/NotFoundSection'))

const NotFoundPage = () => {
	return (
		<>
			<Suspense fallback={<h1>Loading...</h1>}>
				<NavBar query />
			</Suspense>
			<Suspense fallback={<h1>Loading...</h1>}>
				<NotFoundSection />
			</Suspense>
		</>
	)
}

export default NotFoundPage
