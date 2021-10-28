import MyContainer from './commons/MyContainer'
import Wrapper from './commons/Wrapper'
import MyText from './commons/MyText'
import MyButton from './commons/MyButton'

const JokesSection = ({ type, jokes, handleClick }) => {
	return (
		<MyContainer>
			<Wrapper type='column' alignItems='center' gap='1.5rem'>
				<img src={process.env.PUBLIC_URL + '/images/chuck-norris 1.png'} alt='chuck norris' />
				<MyText>{jokes}</MyText>
				{!type && (
					<MyButton onClick={handleClick} variant='contained'>
						Another!
					</MyButton>
				)}
			</Wrapper>
		</MyContainer>
	)
}

export default JokesSection
