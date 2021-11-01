import TextField from '@mui/material/TextField'
import MyButton from './commons/MyButton'
import Wrapper from './commons/Wrapper'
import MyContainer from './commons/MyContainer'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const SearchSection = () => {
	const [keyWord, setKeyWord] = useState(() => '')

	let history = useHistory()

	const handleChange = e => setKeyWord(() => e.target.value)

	const onEnter = e => {
		if (e.key === 'Enter' && e.target.value.length !== 0) {
			history.push(`/search?q=${keyWord}`)
		}
	}

	const handleClick = () => history.push(`/search?q=${keyWord}`)

	return (
		<MyContainer>
			<Wrapper justifyContent='space-between'>
				<TextField
					sx={{ flexGrow: 1 }}
					variant='outlined'
					label='Search...'
					value={keyWord}
					onChange={handleChange}
					onKeyDown={onEnter}
				/>
				<MyButton variant='contained' disabled={!keyWord && true} onClick={handleClick}>
					Search!
				</MyButton>
			</Wrapper>
		</MyContainer>
	)
}

export default SearchSection
