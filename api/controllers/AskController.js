/**
 * AskController
 *
 * @description :: Server-side logic for managing asks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

// Describe the Watson Endpoint
// Specify the information and credentials pertinent to your Watson instance
var endpoint = {
  // enter watson host name; e.g: 'http://www.myhost.com'
  host: 'https://dal09-gateway.watsonplatform.net',

  // enter watson instance name; e.g: '/deepqa/v1/question'
  instance: '/instance/556/deepqa/v1/question',

  // enter authentication info; e.g: 'Basic c29tZXVzZXJpZDpzb21lcGFzc3dvcmQ='
  auth: 'Basic bHN1X3N0dWRlbnQxMjpIVFlveVBxSQ=='
};

module.exports = {
  question: function(req, res) {
		console.log('Going to answer a question!');
    // Handler for /question POST requests
    // Submits a question to Watson via the IBM Watson QAAPI
    // and returns the QAAPI response.
    if (!endpoint.host) {
      res.send(404, 'Watson host information not supplied.');
    }
    var uri = endpoint.host + endpoint.instance;
    var request = require("request");

    // Form a proper Watson QAAPI request
    var questionEntity = {
      "question": {
        "evidenceRequest": { // Ask Watson to return evidence
          "items": 5 // Ask for 5 answers with evidence
        },
        "questionText": req.body.question // The question
      }
    };

    console.log('Ask Watson: ' + req.body.question + ' @ ' + uri);

    // Invoke the IBM Watson QAAPI Synchronously
    // POST the questionEntity and handle the QAAPI response
    request({
      'uri': uri,
      'method': "POST",
      'headers': {
        'Content-Type': 'application/json;charset=utf-8',
        'X-SyncTimeout': 30,
        'Authorization': endpoint.auth
      },
      'json': questionEntity,

    }, function(error, response, body) {
      if (error) {
        console.log(error);
        res.json(error);
      } else {
        // Return the QAAPI response in the entity body
        res.json(body);
      }
    });
  },
};
