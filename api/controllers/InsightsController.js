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
});

var types = ['candidate', 'fb', 'twitter', 'other'];

module.exports = {
    analyze: function(req, res) {
        if (!req.body.type || !types.indexOf(req.body.type)) {
          res.json({
            message: 'Type must be one of [\'candidate\', \'fb\', \'twitter\', \'other\']'
          });
          return;
        }
        if (!req.body.rawInputText || req.body.rawInputText.length < 5000) {
          res.json({
            message: 'rawInputText must be over 5000 chars'
          });
          return;
        }
        personality_insights.profile({
            text: req.body.rawInputText,
            language: 'en'
          },
          function(err, response) {
            if (err) {
              console.log('error:', err);
            } else {
              Insights.create(req.body.typeId ? {
                type: req.body.type,
                typeId: req.body.typeId,
                rawInputText: req.body.rawInputText,
                rawJsonOutput: JSON.stringify(response)
              } : {
                type: req.body.type,
                rawInputText: req.body.rawInputText,
                rawJsonOutput: JSON.stringify(response)
              }).exec(function(err, created) {
                if (err) {
                  console.log(err);
                }
                if (!created) {
                  console.log(new Error('Failed to save insights.'));
                } else {
                  console.log('Insights saved!');
                  res.json(response);
                }
              });
            }
          });
        /*Insights.findOne({type: options.type, typeId: options.typeId}).exec(function(err, insights) {
			if (err) { console.log(err); }
			if (!insights) {

			} else {
				res.json(JSON.parse(insights.rawJsonOutput));
	      return;
			}
		});*/
  }
};
