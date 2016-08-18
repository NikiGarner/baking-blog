import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr(),
  title: DS.attr(),
  time: DS.attr(),
  serving: DS.attr(),
  text: DS.attr(),
});
