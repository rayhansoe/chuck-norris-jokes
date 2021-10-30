import './global.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SearchResultPage from './pages/SearchResultPage'
import CategoryResultPage from './pages/CategoryResultPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
	return (
		<Router>
			<div className='container'>
				<Switch>
					<Route path='/' exact component={HomePage} />
					<Route path='/search' exact component={SearchResultPage} />
					<Route path='/category' exact component={CategoryResultPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</div>
		</Router>
	)
}

export default App
