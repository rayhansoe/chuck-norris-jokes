import { Autocomplete, TextField } from '@mui/material'
import { useState } from 'react'
import MyButton from './commons/MyButton'
import MyContainer from './commons/MyContainer'
import Wrapper from './commons/Wrapper'
import { category as c } from '../tools'
import { useHistory } from 'react-router-dom'

const CategorySection = () => {
	const [category, setCategory] = useState(() => null)
	const [inputCategory, setInputCategory] = useState(() => '')

	let history = useHistory()

	const handleClick = () => history.push(`/category?q=${category}`)

	const onEnter = e => {
		if (e.key === 'Enter' && e.target.value.length !== 0 && c.includes(category)) {
			history.push(`/category?q=${category}`)
		}
	}

	return (
		<MyContainer position='absolute'>
			<Wrapper justifyContent='space-between'>
				<Autocomplete
					value={category}
					onChange={(event, newValue) => {
						setCategory(() => newValue)
					}}
					inputValue={inputCategory}
					onKeyDown={onEnter}
					onInputChange={(event, newInputValue) => {
						setInputCategory(() => newInputValue)
					}}
					disablePortal
					id='combo-box-demo'
					options={c}
					sx={{ width: 300, flexGrow: '1' }}
					renderInput={params => <TextField {...params} label='Kategori' />}
				/>
				<MyButton variant='contained' disabled={!category && true} onClick={handleClick}>
					Search!
				</MyButton>
			</Wrapper>
		</MyContainer>
	)
}

export default CategorySection
