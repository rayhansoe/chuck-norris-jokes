import TextField from '@mui/material/TextField'
import MyButton from './commons/MyButton'
import Wrapper from './commons/Wrapper'
import MyContainer from './commons/MyContainer'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SearchSection = () => {
	const [keyWord, setKeyWord] = useState(() => '')
	return (
		<MyContainer>
			<Wrapper justifyContent='space-between'>
				<TextField
					sx={{ flexGrow: 1 }}
					variant='outlined'
					label='Search...'
					value={keyWord}
					onChange={e => {
						setKeyWord(() => e.target.value)
					}}
				/>
				<MyButton variant='contained' disabled={!keyWord && true}>
					<Link to={`/search?q=${keyWord}`}>Search!</Link>
				</MyButton>
			</Wrapper>
		</MyContainer>
	)
}

export default SearchSection
