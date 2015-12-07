/**
* Ask.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    question: {
      type: 'string',
      unique: true,
      required: true
    },
    count: {
      type: 'integer',
      defaultsTo: 1,
      required: true
    }
  }
};
