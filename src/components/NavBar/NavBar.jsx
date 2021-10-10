import styled from 'styled-components'

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

const NavButton = styled.img`
	position: absolute;
	display: block;
	left: 0.5rem;
	margin: auto;
	padding: 0;
	transform: scale(0.5);
	cursor: pointer;
`

const NavBar = () => {
	const slug = true
	return (
		<Nav>
			<NavWrapper>
				{slug && (
					<NavButton src={process.env.PUBLIC_URL + '/images/left-arrow-Icon lg.png'} alt='' />
				)}
				<NavLogo>Chuck Norris</NavLogo>
			</NavWrapper>
		</Nav>
	)
}

export default NavBar
