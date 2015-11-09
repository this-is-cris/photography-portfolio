
import React from 'react';
import { Link } from 'react-router';

import classNames from 'classnames';

class Navigation extends React.Component {
	constructor() {
		super();

		this.toggleNav = this.toggleNav.bind(this);

		this.state = {
			navigationState: false
		};
	}
	toggleNav() {
		this.setState({
			navigationState: !this.state.navigationState
		});
	}
	render() {
		var navigationClasses = classNames({ 'navigation': true, 'navigation--active': this.state.navigationState });
		return (
			<div className={navigationClasses}>
				<button className='navigation-trigger' onClick={this.toggleNav}>N</button>
				<nav className={classNames}>
					<ul>
						<li onClick={this.toggleNav}><Link to='/about'>About</Link></li>
						<li onClick={this.toggleNav}><Link to='/photos/single'>Photo</Link></li>
						<li onClick={this.toggleNav}><Link to='/collections/single'>Collection</Link></li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Navigation;
