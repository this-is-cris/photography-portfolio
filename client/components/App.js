
import React from 'react';
import Button from './Button';
import Page from './Page';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello World!</h1>
				<Button something='basic property'>Click me!</Button>
				<Page text='Something to be said!' />
			</div>
		);
	}
}

export default App;
