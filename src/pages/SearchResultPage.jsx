import React, { lazy, Suspense } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { jokesByQuerySearch } from '../tools'

const NavBar = lazy(() => import('../components/NavBar'))
const JokesSection = lazy(() => import('../components/JokesSection'))

function useQuery() {
	return new URLSearchParams(useLocation().search)
}

const SearchResultPage = () => {
	const [jokes, setJokes] = useState(() => [])

	let location = useLocation()
	let query = useQuery()
	let q = query.get('q')

	useEffect(() => {
		if (location.pathname === '/search' && q) {
			jokesByQuerySearch(q).then(r => setJokes(() => r.result))
		}
	}, [location.pathname, q])

	return (
		<>
			<Suspense fallback={<h2>Loading...</h2>}>
				<NavBar query={true} />
			</Suspense>

			{q ? (
				<>
					<Suspense fallback={<h2>Loading...</h2>}>
						<JokesSection query={'Search Text: ' + q} type={true} jokes={jokes} />
					</Suspense>
				</>
			) : (
				<h1>Error</h1>
			)}
		</>
	)
}

export default SearchResultPage
