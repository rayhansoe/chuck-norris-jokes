import { Autocomplete, TextField } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import MyButton from './commons/MyButton'
import MyContainer from './commons/MyContainer'
import Wrapper from './commons/Wrapper'

const CategorySection = () => {
	const categories = [
		'animal',
		'career',
		'celebrity',
		'dev',
		'explicit',
		'fashion',
		'food',
		'history',
		'money',
		'movie',
		'music',
		'political',
		'religion',
		'science',
		'sport',
		'travel',
	]
	const [category, setCategory] = useState(() => null)
	const [inputCategory, setInputCategory] = useState(() => '')
	return (
		<MyContainer position='absolute'>
			<Wrapper justifyContent='space-between'>
				<Autocomplete
					value={category}
					onChange={(event, newValue) => {
						setCategory(() => newValue)
					}}
					inputValue={inputCategory}
					onInputChange={(event, newInputValue) => {
						setInputCategory(() => newInputValue)
					}}
					disablePortal
					id='combo-box-demo'
					options={categories}
					sx={{ width: 300, flexGrow: '1' }}
					renderInput={params => <TextField {...params} label='Kategori' />}
				/>
				<MyButton variant='contained' disabled={!category && true}>
					<Link to={`/category?q=${category}`}>Search!</Link>
				</MyButton>
			</Wrapper>
		</MyContainer>
	)
}

export default CategorySection
