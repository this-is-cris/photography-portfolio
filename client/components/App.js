
import React from 'react';
import { Link } from 'react-router';

import Navigation from './Navigation';

class App extends React.Component {
	render() {
		return (
			<div>
				<header className='app-header'>
					<div className='logo'>
						<Link to='/'>
							<h1>Ap</h1>
						</Link>
					</div>

					<Navigation />
				</header>

				<div className='app-body'>{this.props.children}</div>

				<footer className='app-footer'>
					@2015 Anatol Poiata
				</footer>
			</div>
		);
	}
}

export default App;
