import MyContainer from '../commons/MyContainer'
import Wrapper from '../commons/Wrapper'
import MyText from '../commons/MyText'
import MyButton from '../commons/MyButton'

const JokesSection = () => {
	const jokes = '“Chuck Norris is so awesome when he touches your house it burns down.”'
	return (
		<MyContainer>
			<Wrapper type='column' alignItems='center' gap='1.5rem'>
				<img src={process.env.PUBLIC_URL + '/images/chuck-norris 1.png'} alt='chuck norris' />
				<MyText>{jokes}</MyText>
				<MyButton variant='contained'>Another!</MyButton>
			</Wrapper>
		</MyContainer>
	)
}

export default JokesSection
