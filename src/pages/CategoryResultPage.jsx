import React, { lazy, Suspense, useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { checkStatus } from '../tools'

const NavBar = lazy(() => import('../components/NavBar'))
const JokesSection = lazy(() => import('../components/JokesSection'))
const NotFoundSection = lazy(() => import('../components/NotFoundSection'))

function useQuery() {
	return new URLSearchParams(useLocation().search)
}

const CategoryResultPage = () => {
	const [jokes, setJokes] = useState(() => '')
	const [count, setCount] = useState(() => 1)
	const [isLoading, setIsLoading] = useState(() => true)
	const [isError, setIsError] = useState(() => false)

	let location = useLocation()
	let query = useQuery()
	let q = query.get('q')

	useEffect(() => {
		const getJokes = async () => {
			const check = await checkStatus(
				`https://api.chucknorris.io/jokes/random?category=${q}`
			).catch(err => console.log(err))

			check && setJokes(() => check.value)

			!check && setIsError(() => false)

			setTimeout(() => {
				setIsLoading(() => false)
			}, 500)
		}

		if (count) {
			if (location.pathname && q) {
				getJokes()
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
						<JokesSection
							query={'Category: ' + q}
							jokes={jokes}
							handleClick={handleClick}
							isError={isError}
							isLoading={isLoading}
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

export default CategoryResultPage
