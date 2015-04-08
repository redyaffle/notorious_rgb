import Ember from 'ember';

export default Ember.Component.extend({
  red: null,
  green: null,
  blue: null,
  hex: null,

  backgroundColor: function() {
    return 'background-color:' + this.get('hex');
  }.property('hex', 'red', 'green', 'blue'),

  setHexFromRgb: function() {
    var red = parseInt(this.get('red') || 0, 10),
        green = parseInt(this.get('green') || 0, 10),
        blue = parseInt(this.get('blue') || 0, 10);

    var shifted = ((1 << 24) + (red << 16) + (green << 8) + blue);
    var hexColor = '#' + (shifted).toString(16).slice(1).toUpperCase();
    this.set('hex', hexColor);
  }.observes('red','green','blue'),

  setRgbFromHex: function() {
    var hex = this.get('hex');
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      this.set('red', parseInt(result[1], 16));
      this.set('green', parseInt(result[2], 16));
      this.set('blue', parseInt(result[3], 16));
    }
  }.observes('hex'),

  notifyColorChange: function() {
    this.sendAction('action', this.get('red'), this.get('green'), this.get('blue'));
  }.observes('hex')
});
