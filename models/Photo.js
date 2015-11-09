var keystone = require('keystone');
var Types = keystone.Field.Types;

var Photo = new keystone.List('Photo', {
    autokey: { path: 'slug', from: 'title', unique: true },
    map: { name: 'title' },
    defaultSort: '-createdAt'
});

Photo.add({
	title: { type: String, required: true, index: true },
	description: { type: Types.Textarea, required: false, index: true },
	gallery: { type: Types.Relationship, ref: 'Gallery' },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft' },
	createdAt: { type: Date, default: Date.now },
	image: { 
		type: Types.S3File
		// headers: { 
		// 	'x-amz-meta-Cache-Control' : 'max-age=' + (60 * 30)
		// }
	}
});


Photo.register();
