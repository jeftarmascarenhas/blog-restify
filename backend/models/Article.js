'use strict';

let mongoose = require('mongoose')
    ,Schema = mongoose.Schema
    ,comment = require('./Comment')
    ;

let ArticleSchema = new Schema({
	title: {type: String, default:''},
	slug: {type:String, default:''},
	conent: {type:String, default:''},
	author: {type:String, default:''},
	comments: [comment.schema],
	create_at:{type: Date, default: Date.now}
});

module.exports = mongoose.model('Article', ArticleSchema);