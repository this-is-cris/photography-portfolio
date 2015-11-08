
import React from 'react';

class Button extends React.Component {
	clickHandler() {
		console.log('Clicked!');
	}
	render() {
		console.log(this.props.something);
		return (
			<button onClick={this.clickHandler}>{this.props.children}</button>
		);
	}
}

export default Button;
