
import keystone from 'keystone';

// const Photo = keystone.list('Photo');

const photoService = {
	name: 'photo-service',
	read(req, resource, params, config, callback) {

		// query database here...
		console.log('Query received!');
		// callback(null, photo/photos);
		callback(null, {id: 1234, name: 'Awesome!'});

	}
};

export default photoService;
