import Ember from 'ember';
export default Ember.Controller.extend({
  isNotorious: false,
  red: null,
  green: null,
  blue: null,

  actions: {
    colorChanged: function(red, green, blue) {
      this.set('red', red);
      this.set('green', green);
      this.set('blue', blue);
    }
  }
});
