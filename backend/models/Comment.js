'use strict';

let mongoose = require('mongoose')
  , Schema = mongoose.Schema
  ;

let CommentSchema = new Schema({
	text:{type:String, default:''},
	author:{type:String, default:''},
	create_at:{type: Date, default: Date.now}
});

module.exports = mongoose.model('Comment', CommentSchema);