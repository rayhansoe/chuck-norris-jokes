import React, { lazy, Suspense, useState, useEffect } from 'react'
import { randomJokes } from '../tools'

const NavBar = lazy(() => import('../components/NavBar'))
const JokesSection = lazy(() => import('../components/JokesSection'))
const SearchSection = lazy(() => import('../components/SearchSection'))
const CategorySection = lazy(() => import('../components/CategorySection'))

const HomePage = () => {
	const [jokes, setJokes] = useState(() => '')
	const [count, setCount] = useState(() => 1)

	useEffect(() => {
		if (count) {
			randomJokes().then(r => setJokes(() => r.value))
		}
	}, [count])

	const handleClick = () => setCount(c => c + 1)
	return (
		<>
			<Suspense fallback={<h2>Loading...</h2>}>
				<NavBar />
			</Suspense>
			<Suspense fallback={<h2>Loading...</h2>}>
				<SearchSection />
			</Suspense>
			<Suspense fallback={<h2>Loading...</h2>}>
				<JokesSection jokes={jokes} handleClick={handleClick} />
			</Suspense>
			<Suspense fallback={<h2>Loading...</h2>}>
				<CategorySection />
			</Suspense>
		</>
	)
}

export default HomePage
