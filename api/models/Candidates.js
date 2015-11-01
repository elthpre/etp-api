/**
* Candidates.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string',
    },
    party: {
      type: 'string',
    },
    birthdate: {
      type: 'date',
    },
    birthplace: {
      type: 'string',
    },
    state: {
      type: 'string',
    },
    announced: {
      type: 'date',
    },
    widthdrew: {
      type: 'date',
    },
    candidacy: {
      type: 'string',
    },
    bio: {
      type: 'text',
    },
    tweets: {
      collection: 'tweets',
      dominant: true
    }
  }
};
