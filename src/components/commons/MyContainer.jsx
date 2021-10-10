import styled from 'styled-components'

const MyContainer = styled.section.attrs(props => ({
	position: props.position || 'relative',
}))`
	position: ${props => props.position};
	width: 100%;
	bottom: ${props => (props.position === 'relative' ? 'auto' : '1rem')};
`

export default MyContainer
