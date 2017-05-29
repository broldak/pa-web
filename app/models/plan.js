import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  bodyText: DS.attr('string'),
  user: DS.belongsTo('user')
});
