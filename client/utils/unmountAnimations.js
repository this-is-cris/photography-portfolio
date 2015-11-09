
export function unmountCollections(callback) {
	console.log('Unmounting collections');
	var el = document.getElementById('main-view');

	var header = document.getElementById('photostream-header');
	var wrapper = document.getElementById('photostream-wrapper');

	Velocity(header, {
		// opacity: [ 0, 1 ],
		translateZ: 0,
		translateY: [ '-100%', 0]
	},{
		duration: 300
	});

	Velocity(wrapper, {
		opacity: [ 0, 1 ],
		translateZ: 0,
		translateY: [ 200, 0]
	},{
		duration: 400,
		complete: function() {
			callback();
		}
	});
}

export function unmountPhoto(callback) {
	console.log('Unmounting photo');
	var el = document.getElementById('main-view');
	Velocity(el, {
		opacity: [ 0, 1 ],
		translateZ: 0,
		translateY: [0, 0]
	},{
		duration: 500,
		complete: function() {
			callback();
		}
	});
}

export function unmountAbout(callback) {
	console.log('Unmounting about');
	var el = document.getElementById('main-view');
	Velocity(el, {
		opacity: [ 0, 1 ],
		translateZ: 0,
		translateY: [0, 0]
	},{
		duration: 500,
		complete: function() {
			callback();
		}
	});
}

export function unmountHome(callback) {
	console.log('Unmounting home');
	var el = document.getElementById('main-view');
	Velocity(el, {
		opacity: [ 0, 1 ],
		translateZ: [0, 0]
	},{
		duration: 500,
		complete: function() {
			callback();
		}
	});
}
