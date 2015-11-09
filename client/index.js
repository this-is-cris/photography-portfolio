
import React from 'react';
import ReactDOM from 'react-dom';

import Fetcher from 'fetchr';

import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router } from 'react-router';

import routes from './routes';

import {
  unmountCollections,
  unmountPhoto,
  unmountAbout,
  unmountHome
} from './utils/unmountAnimations';

var fetcher = new Fetcher({
    xhrPath: '/api',
    xhrTimeout: 10000
});


var history = createBrowserHistory();

history.listen((location) => {
  window.scrollTo(0, 0);
	// Implement on new location enter...
  var view = document.getElementById('main-view');
  
  if(view) {
    view.style.transform = 'translateY(0)';
    view.style.opacity = 1;
  }
});


history.listenBefore((location, callback) => {
	if(location.action == 'POP') {
  	callback();
  	return;
  }

  var url = window.location.pathname.split('/');
  console.log(url[1]);

  // Implement data fetching and callback to history listen...

  switch(url[1]) {
    case 'collections':
      return unmountCollections(callback);
    case 'photos':
      return unmountPhoto(callback);
    case 'about':
      return unmountAbout(callback);
    default:
      return unmountHome(callback);
  }

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
