/**
* Tweets.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  connection:'bluemix',
  attributes: {
    text: {
      type: 'string',
    },
    canditate: {
      model:'canditates'
    },
    time: {
      type: 'datetime'
    }
  }
};
