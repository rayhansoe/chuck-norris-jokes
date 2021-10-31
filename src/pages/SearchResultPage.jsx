import React, { lazy, Suspense, useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { checkStatus } from '../tools'

const NavBar = lazy(() => import('../components/NavBar'))
const JokesSection = lazy(() => import('../components/JokesSection'))
const NotFoundSection = lazy(() => import('../components/NotFoundSection'))

function useQuery() {
	return new URLSearchParams(useLocation().search)
}

const SearchResultPage = () => {
	const [jokes, setJokes] = useState(() => [])
	const [isLoading, setIsLoading] = useState(() => true)
	const [isError, setIsError] = useState(() => false)
	const [isEmpty, setIsEmpty] = useState(() => false)

	let location = useLocation()
	let query = useQuery()
	let q = query.get('q')

	useEffect(() => {
		const getJokes = async () => {
			const check = await checkStatus(`https://api.chucknorris.io/jokes/search?query=${q}`).catch(
				err => console.log(err)
			)

			check.result.length && setJokes(() => check.result)

			!check.result.length && setIsEmpty(curr => !curr)

			!check && setIsError(curr => !curr)

			setTimeout(() => {
				setIsLoading(curr => !curr)
			}, 500)
		}

		if (location.pathname === '/search' && q) {
			getJokes()
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
						<JokesSection
							query={'Search Text: ' + q}
							type={true}
							jokes={jokes}
							isLoading={isLoading}
							isError={isError}
							isEmpty={isEmpty}
						/>
					</Suspense>
				</>
			) : (
				<Suspense fallback={<h1>Loading...</h1>}>
					<NotFoundSection />
				</Suspense>
			)}
		</>
	)
}

export default SearchResultPage
