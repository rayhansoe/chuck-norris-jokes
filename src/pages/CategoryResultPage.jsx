import React, { lazy, Suspense, useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { jokesByCategory } from '../tools'

const NavBar = lazy(() => import('../components/NavBar'))
const JokesSection = lazy(() => import('../components/JokesSection'))

function useQuery() {
	return new URLSearchParams(useLocation().search)
}

const CategoryResultPage = props => {
	let location = useLocation()
	let query = useQuery()
	let q = query.get('q')

	const [jokes, setJokes] = useState(() => '')
	const [count, setCount] = useState(() => 1)

	useEffect(() => {
		if (count) {
			if (location.pathname && q) {
				jokesByCategory(q).then(r => setJokes(() => r.value))
			}
		}
	}, [count, location.pathname, q])

	const handleClick = () => setCount(c => c + 1)

	return (
		<>
			<Suspense fallback={<h2>Loading...</h2>}>
				<NavBar query={true} />
			</Suspense>
			{q ? (
				<>
					<Suspense fallback={<h2>Loading...</h2>}>
						<JokesSection query={'Category: ' + q} jokes={jokes} handleClick={handleClick} />
					</Suspense>
				</>
			) : (
				<h1>Error</h1>
			)}
		</>
	)
}

export default CategoryResultPage
