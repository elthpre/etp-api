/**
 * Insights.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
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
  }
};
