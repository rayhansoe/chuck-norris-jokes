import { Autocomplete, TextField } from '@mui/material'
import MyButton from './commons/MyButton'
import MyContainer from './commons/MyContainer'
import Wrapper from './commons/Wrapper'

const CategorySection = () => {
	return (
		<MyContainer position='absolute'>
			<Wrapper justifyContent='space-between'>
				<Autocomplete
					disablePortal
					id='combo-box-demo'
					options={['hei', 'ui']}
					sx={{ width: 300, flexGrow: '1' }}
					renderInput={params => <TextField {...params} label='Kategori' />}
				/>
				<MyButton variant='contained'>Search!</MyButton>
			</Wrapper>
		</MyContainer>
	)
}

export default CategorySection
