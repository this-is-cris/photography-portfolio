
import React from 'react';
import { Link } from 'react-router';

class Navigation extends React.Component {
	render() {
		return (
			<div className='navigation'>
				<nav>
					<ul>
						<li><Link to='/about'>About</Link></li>
						<li><Link to='/photos/single'>Photo</Link></li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Navigation;
