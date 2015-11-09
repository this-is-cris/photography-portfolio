var keystone = require('keystone');
var Types = keystone.Field.Types;

var Gallery = new keystone.List('Gallery', {
    autokey: { path: 'slug', from: 'title', unique: true },
    map: { name: 'title' },
    defaultSort: '-createdAt'
});

Gallery.add({
	title: { type: String, required: true, index: true },
	description: { type: Types.Textarea, required: false, index: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft' },
	createdAt: { type: Date, default: Date.now },
	
});

Gallery.relationship({ path: 'photos', ref: 'Photo', refPath: 'photo' });
Gallery.register();