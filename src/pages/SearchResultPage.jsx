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
		if (location.pathname && q) {
			jokesByQuerySearch(q).then(r => setJokes(() => r.result))
		}
	}, [location.pathname, q])

	return (
		<>
			<Suspense fallback={<h2>Loading...</h2>}>
				<NavBar query={true} />
			</Suspense>

			{console.log(jokes)}

			{q ? (
				<>
					<h1>{query.get('q')}</h1>
					<Suspense fallback={<h2>Loading...</h2>}>
						<JokesSection query={q} type={true} />
					</Suspense>
				</>
			) : (
				<h1>Error</h1>
			)}
		</>
	)
}

export default SearchResultPage
