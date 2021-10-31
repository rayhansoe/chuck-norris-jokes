import React, { lazy, Suspense, useState, useEffect } from 'react'
import { checkStatus } from '../tools'

const NavBar = lazy(() => import('../components/NavBar'))
const JokesSection = lazy(() => import('../components/JokesSection'))
const SearchSection = lazy(() => import('../components/SearchSection'))
const CategorySection = lazy(() => import('../components/CategorySection'))

const HomePage = () => {
	const [jokes, setJokes] = useState(() => '')
	const [count, setCount] = useState(() => 1)
	const [isLoading, setIsLoading] = useState(() => true)
	const [isError, setIsError] = useState(() => false)

	useEffect(() => {
		const getJokes = async () => {
			const check = await checkStatus('https://api.chucknorris.io/jokes/random').catch(err =>
				console.log(err)
			)

			check && setJokes(() => check.value)

			!check && setIsError(curr => !curr)

			setTimeout(() => {
				setIsLoading(() => false)
			}, 500)
		}

		if (count) {
			getJokes()
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
				<JokesSection
					jokes={jokes}
					handleClick={handleClick}
					isLoading={isLoading}
					isError={isError}
				/>
			</Suspense>
			<Suspense fallback={<h2>Loading...</h2>}>
				<CategorySection />
			</Suspense>
		</>
	)
}

export default HomePage
