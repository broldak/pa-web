import DS from 'ember-data';
import Ember from 'ember';
const { String: { singularize, capitalize } } = Ember;

export default DS.JSONAPISerializer.extend({
  payloadKeyFromModelName(modelName) {
    return singularize(capitalize(modelName));
  },

  keyForAttribute: function(attr) {
    return Ember.String.underscore(attr);
  }
});
