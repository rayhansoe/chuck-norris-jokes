import styled from 'styled-components'
import IconButton from '@mui/material/IconButton'
import ArrowBackRounded from '@mui/icons-material/ArrowBackRounded'
import { Link } from 'react-router-dom'

const Nav = styled.nav`
	position: relative;
	width: 100%;
	background-color: #fffbeb;
	height: auto;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
	transform: translate3d(0, 0, 0);
`

const NavWrapper = styled.div`
	position: relative;
	max-width: 768px;
	margin: 0 auto;
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
`

const NavLogo = styled.h1`
	color: #b45309;
	font-size: 1.5em;
	font-weight: 400;
	cursor: pointer;
	font-weight: 500;
	text-transform: uppercase;
	line-height: 1.875rem;
	font-family: 'Rye', cursive;
`

const NavButton = styled(IconButton)`
	position: absolute;
	display: block;
	left: 0.5rem;
	margin: auto;
	padding: 0;

	&:hover {
		color: '#7a3500';
	}
`

const NavBar = ({ query }) => {
	return (
		<Nav>
			<NavWrapper>
				{query && (
					<NavButton
						sx={{
							position: 'absolute',
							margin: 'auto',
							color: '#b45309',
						}}
						aria-label='Arrow Left'>
						<Link to='/'>
							<ArrowBackRounded fontSize='medium' />
						</Link>
					</NavButton>
				)}
				<NavLogo>
					<Link to='/'>Chuck Norris</Link>
				</NavLogo>
			</NavWrapper>
		</Nav>
	)
}

export default NavBar
