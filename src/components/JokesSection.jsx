import MyContainer from './commons/MyContainer'
import Wrapper from './commons/Wrapper'
import MyText from './commons/MyText'
import MyButton from './commons/MyButton'
import MyTitle from './commons/MyTitle'

const JokesSection = ({ type, jokes, handleClick, query }) => {
	return (
		<MyContainer>
			<Wrapper type='column' alignItems='center' gap='1.5rem'>
				<img src={process.env.PUBLIC_URL + '/images/chuck-norris 1.png'} alt='chuck norris' />
				{query && <MyTitle>{query}</MyTitle>}
				{!type ? (
					<>
						<MyText>"{jokes}"</MyText>
						<MyButton onClick={handleClick} variant='contained'>
							Another!
						</MyButton>
					</>
				) : (
					jokes.map(joke => <MyText key={joke.id}>{`"${joke.value}"`}</MyText>)
				)}
			</Wrapper>
		</MyContainer>
	)
}

export default JokesSection
