import './global.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SearchResultPage from './pages/SearchResultPage'
import CategoryResultPage from './pages/CategoryResultPage'

const NotFound = props => <h1>Errror!!</h1>

const App = () => {
	return (
		<Router>
			<div className='container'>
				<Switch>
					<Route path='/' exact component={HomePage} />
					<Route path='/search' component={SearchResultPage} />
					<Route path='/category' component={CategoryResultPage} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</Router>
	)
}

export default App
