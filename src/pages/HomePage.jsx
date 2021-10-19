import React, { lazy, Suspense } from 'react'

const NavBar = lazy(() => import('../components/NavBar'))
const JokesSection = lazy(() => import('../components/JokesSection'))
const SearchSection = lazy(() => import('../components/SearchSection'))
const CategorySection = lazy(() => import('../components/CategorySection'))

const HomePage = () => {
	return (
		<>
			<Suspense fallback={<h2>Loading...</h2>}>
				<NavBar />
			</Suspense>
			<Suspense fallback={<h2>Loading...</h2>}>
				<SearchSection />
			</Suspense>
			<Suspense fallback={<h2>Loading...</h2>}>
				<JokesSection />
			</Suspense>
			<Suspense fallback={<h2>Loading...</h2>}>
				<CategorySection />
			</Suspense>
		</>
	)
}

export default HomePage
