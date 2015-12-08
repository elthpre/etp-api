/**
* Candidate.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string',
    },
    gender: {
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
    hometown: {
      type: 'string',
    },
    religion: {
      type: 'string',
    },
    education: {
      type: 'text',
    },
    political: {
      type: 'text',
    },
    professional: {
      type: 'text',
    }
  }
};
