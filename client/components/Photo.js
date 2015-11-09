
import React from 'react';
import { Link } from 'react-router';

class Photo extends React.Component {
	componentDidMount() {
		var deck = this.refs.deck;
		var thumbs = this.refs.thumbs;
		var photo = this.refs.photo;
		var thumbItems = this.refs.thumbsList.children;

		Velocity(deck, {
			translateZ: 0,
			translateY: [ 0, '-100%' ]
		}, {
			duration: 700,
			easing: [0.77, 0, 0.175, 1]
		});
		Velocity(thumbs, {
			translateZ: 0,
			translateY: [ 0, '100%' ]
		}, {
			duration: 700,
			easing: [0.77, 0, 0.175, 1]
		});

		for (var i = 0; i < thumbItems.length; i++) {
			thumbItems[i].style.opacity = 0;
			Velocity(thumbItems[i], {
				translateZ: 0,
				opacity: [ 1, 0 ],
				translateY: [ 0, '100%' ]
			}, {
				duration: 500,
				delay: i * 50,
				easing: [0.77, 0, 0.175, 1]
			});
		}
		
		Velocity(photo, {
			opacity: [ 1, 0 ],
			translateZ: 0,
			translateY: [ 0, '100%' ]
		}, {
			duration: 700,
			easing: [0.77, 0, 0.175, 1]
		});
	}
	render() {
		return (
			<section>
				<div className='photo-deck' ref='deck'>
					<header ref='header'>
						<Link to='/collections/collection'>back to collection</Link>
						<h1>Geysers Are Pretty Up Close Too</h1>
					</header>
					<img src='/img/road.jpg' className='photo' ref='photo' />
				</div>

				<div className='thumbnail-gallery' ref='thumbs'>
					<ul ref='thumbsList'>
						<li>thumbnail</li>
						<li>thumbnail</li>
						<li>thumbnail</li>
						<li>thumbnail</li>
						<li>thumbnail</li>
						
						<li>thumbnail</li>
						<li>thumbnail</li>
						<li>thumbnail</li>
						<li>thumbnail</li>
						<li>thumbnail</li>
					</ul>
				</div>

				<footer></footer>
			</section>
		);
	}
}

export default Photo;
