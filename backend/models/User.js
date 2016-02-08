'use strict';

let mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ;

let UserSchema = new Schema({
	email:{type:String, default:'', index:{
		unique:true
	}},
	password:{type:String, default:''},
	create_at:{type: Date, default: Date.now}

});

module.exports = mongoose.model('User', UserSchema);



