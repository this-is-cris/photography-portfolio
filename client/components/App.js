
import React from 'react';
import { Link } from 'react-router';

import Navigation from './Navigation';

class App extends React.Component {
	render() {
		return (
			<div>
				<header className='app-header clearfix'>
					<Link to='/' className='logo'>
						<h1>Ap</h1>
					</Link>

					<Navigation />
				</header>

				<div className='app-body' id='main-view'>{this.props.children}</div>

				<footer className='app-footer py3 text--center'>
					@2015 Anatol Poiata
				</footer>
			</div>
		);
	}
}

export default App;
