
import React from 'react';
import ReactDOM from 'react-dom';

import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router } from 'react-router';

import routes from './routes';

var history = createBrowserHistory();

history.listen((location) => {
	// Implement on new location enter...
});

history.listenBefore((location, callback) => {
	if(location.action == 'POP') {
  	callback();
  	return;
  }

  // Implement data fetching and callback to history listen...
  callback();
});

ReactDOM.render(
	<Router routes={routes} history={history} />,
	document.getElementById('app')
);
