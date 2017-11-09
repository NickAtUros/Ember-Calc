import DS from "ember-data";

export default DS.Model.extend({
  className: DS.attr(),
  name: DS.attr()
});
