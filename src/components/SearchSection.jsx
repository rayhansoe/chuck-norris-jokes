import TextField from '@mui/material/TextField'
import MyButton from './commons/MyButton'
import Wrapper from './commons/Wrapper'
import MyContainer from './commons/MyContainer'

const SearchSection = () => {
	return (
		<MyContainer>
			<Wrapper justifyContent='space-between'>
				<TextField sx={{ flexGrow: 1 }} variant='outlined' label='Search...' />
				<MyButton variant='contained'>Search!</MyButton>
			</Wrapper>
		</MyContainer>
	)
}

export default SearchSection
