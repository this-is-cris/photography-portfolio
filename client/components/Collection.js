
import React from 'react';
import { Link } from 'react-router';

import PhotoStream from './PhotoStream';

class Collection extends React.Component {
	render() {

		var photoItems = [
			{ slug: 'first-photo', name: 'Name of the first photo' },
			{ slug: 'long-title', name: 'Long photograph titles are rare' },
			{ slug: 'something-longer', name: 'Something longer can be cool' },
			{ slug: 'detail', name: 'Incredible detail' },
			{ slug: 'special-one', name: 'This is quite a special one' },
			{ slug: 'other-photo', name: 'Some other photo' },

			{ slug: 'first-photo', name: 'Name of the first photo' },
			{ slug: 'long-title', name: 'Long photograph titles are rare' },
			{ slug: 'something-longer', name: 'Something longer can be cool' },
			{ slug: 'detail', name: 'Incredible detail' },
			{ slug: 'special-one', name: 'This is quite a special one' },
			{ slug: 'other-photo', name: 'Some other photo' },

			{ slug: 'first-photo', name: 'Name of the first photo' },
			{ slug: 'long-title', name: 'Long photograph titles are rare' },
			{ slug: 'something-longer', name: 'Something longer can be cool' },
			{ slug: 'detail', name: 'Incredible detail' },
			{ slug: 'special-one', name: 'This is quite a special one' },
			{ slug: 'other-photo', name: 'Some other photo' }
		];

		return (
			<section>
				<header className='bg--dark' id='photostream-header'>
					<h1 className='headline m0 py4'>Collection page</h1>
				</header>

				<div id='photostream-wrapper'>
					<PhotoStream items={photoItems} />
				</div>

				<footer>
					Collection footer
				</footer>
			</section>
		);
	}
}

export default Collection;
