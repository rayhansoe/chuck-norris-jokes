import React, { lazy, Suspense } from 'react'
import { useLocation } from 'react-router'

const NavBar = lazy(() => import('../components/NavBar'))
const JokesSection = lazy(() => import('../components/JokesSection'))

function useQuery() {
	return new URLSearchParams(useLocation().search)
}

const SearchResultPage = () => {
	let query = useQuery()
	let q = query.get('q')
	return (
		<>
			<Suspense fallback={<h2>Loading...</h2>}>
				<NavBar query={true} />
			</Suspense>
			{q ? (
				<>
					<h1>{query.get('q')}</h1>
					<Suspense fallback={<h2>Loading...</h2>}>
						<JokesSection query={q} />
					</Suspense>
				</>
			) : (
				<h1>Error</h1>
			)}
		</>
	)
}

export default SearchResultPage
