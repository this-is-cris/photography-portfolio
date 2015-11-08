
import React from 'react';
import ReactDOM from 'react-dom';

import Fetcher from 'fetchr';

import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router } from 'react-router';

import routes from './routes';

var fetcher = new Fetcher({
    xhrPath: '/api',
    xhrTimeout: 10000
});

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
	document.getElementById('app'),
  () => {
    fetcher
      .read('photo-service')
      .params({id: 1234})
      .end((err, data, meta) => {
        if(err) {
          console.log(err);
          return;
        }
        console.log(data);
      });
  }
);
