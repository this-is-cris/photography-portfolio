
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App   from './components/App';
import Home  from './components/Home';
import About from './components/About';
import Photo from './components/Photo';

const routes = (
	<Route path='/' component={App}>
		<IndexRoute component={Home} />
		<Route path='/about' component={About} />
		<Route path='/photos/:id' component={Photo} />
	</Route>
);

export default routes;
