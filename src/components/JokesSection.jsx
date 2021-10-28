import MyContainer from './commons/MyContainer'
import Wrapper from './commons/Wrapper'
import MyText from './commons/MyText'
import MyButton from './commons/MyButton'
import { useState, useEffect } from 'react'
import { randomJokes } from '../tools'

const JokesSection = () => {
	const [jokes, setJokes] = useState(() => '')
	const [count, setCount] = useState(() => 1)

	useEffect(() => {
		if (count) {
			randomJokes().then(r => setJokes(() => r.value))
		}
	}, [count])

	const handleClick = () => setCount(c => c + 1)

	return (
		<MyContainer>
			<Wrapper type='column' alignItems='center' gap='1.5rem'>
				<img src={process.env.PUBLIC_URL + '/images/chuck-norris 1.png'} alt='chuck norris' />
				<MyText>{jokes}</MyText>
				<MyButton onClick={handleClick} variant='contained'>
					Another!
				</MyButton>
			</Wrapper>
		</MyContainer>
	)
}

export default JokesSection
