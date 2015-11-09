
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App   from './components/App';
import Home  from './components/Home';
import About from './components/About';
import Photo from './components/Photo';
import Collection from './components/Collection';

const routes = (
	<Route path='/' component={App}>
		<IndexRoute component={Home} />
		<Route path='/about' component={About} />
		<Route path='/photos/:id' component={Photo} />
		<Route path='/collections/:id' component={Collection} />
	</Route>
);

export default routes;
