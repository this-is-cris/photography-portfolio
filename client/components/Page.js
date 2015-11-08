
import React from 'react';

class Page extends React.Component {
	render() {
		return (
			<div>
				<p>This is my page</p>
				<div>{this.props.text}</div>
			</div>
		);
	}
}

export default Page;
