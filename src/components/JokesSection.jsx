import MyContainer from './commons/MyContainer'
import Wrapper from './commons/Wrapper'
import MyText from './commons/MyText'
import MyButton from './commons/MyButton'
import MyTitle from './commons/MyTitle'

import { Link } from 'react-router-dom'

const JokesSection = ({ type, jokes, handleClick, query, isLoading, isError, isEmpty }) => {
	const JokesType1 = () => {
		if (isLoading) {
			return (
				<>
					<MyText>Loading...</MyText>
					<MyButton onClick={handleClick} variant='contained' disabled>
						Another!
					</MyButton>
				</>
			)
		}
		if (isError) {
			return (
				<>
					<MyText>Something went wrong...</MyText>
					<MyButton variant='outlined'>
						<Link to='/'>Back to Home</Link>
					</MyButton>
				</>
			)
		}

		return (
			<>
				<MyText>"{jokes}"</MyText>
				<MyButton onClick={handleClick} variant='contained'>
					Another!
				</MyButton>
			</>
		)
	}

	const JokesType2 = () => {
		if (isLoading) {
			return <MyText>Loading...</MyText>
		}
		if (isError) {
			return (
				<>
					<MyText>Something went wrong...</MyText>
					<MyButton variant='contained'>
						<Link to='/'>Back to Home</Link>
					</MyButton>
				</>
			)
		}

		if (isEmpty) {
			return (
				<>
					<MyText>Tidak ada jokes yang relevant dengan kata kunci.</MyText>
					<MyButton variant='contained'>
						<Link to='/'>Back to Home</Link>
					</MyButton>
				</>
			)
		}

		return jokes.map(joke => <MyText key={joke.id}>{`"${joke.value}"`}</MyText>)
	}

	return (
		<MyContainer>
			<Wrapper type='column' alignItems='center' gap='1.5rem'>
				<img src={process.env.PUBLIC_URL + '/images/chuck-norris 1.png'} alt='chuck norris' />
				{query && <MyTitle>{query}</MyTitle>}
				{!type ? (
					// type 1 => with button another!
					<JokesType1 />
				) : (
					// type 2
					<JokesType2 />
				)}
			</Wrapper>
		</MyContainer>
	)
}

export default JokesSection
