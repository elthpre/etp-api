/**
 * InsightsController
 *
 * @description :: Server-side logic for managing insights
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var watson = require('watson-developer-cloud');

var personality_insights = watson.personality_insights({
  username: '6ffb2e76-80b6-4735-94db-f0c5187462fc',
  password: 'QPu4FCv8mD5w',
  version: 'v2'
}); //"url": "https://gateway.watsonplatform.net/personality-insights/api"

/*
type: {
	type: 'string',
	enum: ['candidate', 'fb', 'twitter', 'other'],
	required: true
},
typeId: {
	type: 'string'
},
rawInputText: {
	type: 'text',
	required: true
},
rawJsonOutput: {
	type: 'text'
}
*/
var types = ['candidate', 'fb', 'twitter', 'other'];

module.exports = {
  analyze: function(req, res) {
    var options = {
      type: null,
      rawInputText: null
    };
    if (req.body.type && types.indexOf(req.body.type)) {
      options.type = req.body.type;
    } else {
      res.json({
        message: 'Type must be one of [\'candidate\', \'fb\', \'twitter\', \'other\']'
      });
      return;
    }
    if (req.body.rawInputText && req.body.rawInputText.length > 5000) {
      options.rawInputText = req.body.rawInputText;
    } else {
      res.json({
        message: 'rawInputText must be over 5000 chars'
      });
      return;
    }
    if (req.body.typeId) {
      options.typeId = req.body.typeId;
    }
		/*Insights.findOne({type: options.type, typeId: options.typeId}).exec(function(err, insights) {
			if (err) { console.log(err); }
			if (!insights) {
				personality_insights.profile({
		        text: options.rawInputText,
		        language: 'en'
		      },
		      function(err, response) {
		        if (err) {
							console.log('error:', err);
						} else {
		          console.log(JSON.stringify(response, null, 2));
							options.rawJsonOutput = JSON.stringify(response);
							Insights.create(options).exec(function(err, created) {
								if (err) { console.log(err); }
								if (!created) {
									console.log(new Error('Failed to save insights.'));
								} else {
									console.log('Insights saved!');
									res.json(response);
								}
							});
						}
		      });
			} else {*/
				res.json(JSON.parse(insights.rawJsonOutput));
	      return;
			//}
		//});
  }
};
