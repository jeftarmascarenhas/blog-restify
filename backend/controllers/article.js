'use strict';

let mongoose = require("mongoose")
  , Article = mongoose.model('Article')
  , Comment = mongoose.model('Comment')
  , ObjectId = mongoose.Types.ObjectId
  ;

module.exports = {

	createArticle: (req, res, next) => {
		let articleModel = new Article(req.body);

	    articleModel.save(function(err, article) {
	        if (err) {
	            res.status(500);
	            res.json({
	                type: false,
	                data: "Error occured: " + err
	            })
	        } else {
	            res.json({
	                type: true,
	                data: article
	            })
	        }
    	})
	},

	viewArticle: (req, res, next) => {
		Article.findById(new ObjectId(req.params.id), (err, article) =>{
			if(err){
				res.status(500);
				res.json({
					type: false,
					data:article
				})
			}else{
				if(article){
					
					res.json({
						type:true,
						data: article
					})

				}else{

					res.json({
						type:false,
						article:'Article: ' + req.params.id + 'not found'
					})
				}
			}
		});
	}
};