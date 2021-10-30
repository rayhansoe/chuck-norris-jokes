import MyButton from './commons/MyButton'
import MyContainer from './commons/MyContainer'
import Wrapper from './commons/Wrapper'

import { Link } from 'react-router-dom'

const NotFoundSection = () => {
	return (
		<MyContainer>
			<Wrapper type='column' alignItems='center' gap='1.5rem'>
				<img src={process.env.PUBLIC_URL + '/images/chuck-norris 1.png'} alt='chuck norris' />
				<h1>Page Not Found</h1>
				<MyButton variant='contained'>
					<Link to='/'>Back to Home</Link>
				</MyButton>
			</Wrapper>
		</MyContainer>
	)
}

export default NotFoundSection
