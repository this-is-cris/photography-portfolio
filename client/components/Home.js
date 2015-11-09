
import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
	render() {
		return (
			<section>
				<header>
					<h1>Home page</h1>
				</header>

				<div>This is the home page</div>

				<div>
					<Link to='/collections/collection'>Collection</Link>
				</div>

				<footer>
					Home page footer.
				</footer>
			</section>
		);
	}
}

export default Home;
