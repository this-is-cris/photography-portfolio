
import React from 'react';
import { Link } from 'react-router';

import minigrid from 'minigrid';

class PhotoStream extends React.Component {

	componentDidMount() {
		var itemContainer = this.refs.items;
		var items = itemContainer.children;

		function grid() {
			minigrid({
				container: itemContainer,
				item: '.item',
				gutter: 0
			});
		}

		window.addEventListener('resize', function(){
      grid();
    });

    grid();
	}

	render() {
		return (
			<div className='container px1 px-sm-2'>
				<div className='mxn1 mx-sm-n2 clearfix' ref='items'>
					{this.props.items.map((item, i) => {
						return (
							<div className='item col col-sm-6 col-md-4 px1 px-sm-2' key={i}>
								<p className='bg--grey py2'>Column</p>
								<h1 className='title text--smallcaps'>
									<Link to={`/photos/${item.slug}`}>{item.name}</Link>
								</h1>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default PhotoStream;
