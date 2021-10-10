import styled from 'styled-components'

const Wrapper = styled.div.attrs(props => ({
	type: props.type || 'row',
	gap: props.gap || '1rem',
	alignItems: props.alignItems || 'stretch',
	justifyContent: props.justifyContent || 'flex-start',
}))`
	position: relative;
	max-width: 768px;
	margin: 0 auto;
	padding: 0 1rem;
	display: flex;
	flex-direction: ${props => props.type};
	justify-content: ${props => props.justifyContent};
	align-items: ${props => props.alignItems};
	box-sizing: border-box;
	gap: ${props => props.gap};
`

export default Wrapper
