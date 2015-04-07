import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('color-converter', 'ColorConverterComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  assert.equal(component._state, 'inDOM');
});

test('it sets hex when rgb is not null', function(assert) {
  assert.expect(5);

  var component = this.subject();

  assert.equal(component.get('hex'), null);

  component.setProperties({
    red: '255'
  });
  assert.equal(component.get('hex'), '#FF0000');

  component.setProperties({
    red: '0',
    blue: '255'
  });
  assert.equal(component.get('hex'), '#0000FF');

  component.setProperties({
    red: '0',
    blue: '0',
    green: '255'
  });
  assert.equal(component.get('hex'), '#00FF00');

  component.setProperties({
    red: '0',
    blue: '0',
    green:'0'
  });
  assert.equal(component.get('hex'), '#000000');
});

test('it sets rgb when hex is updated', function(assert) {
  assert.expect(7);

  var component = this.subject();

  assert.equal(component.get('hex'), null);

  component.setProperties({
    hex: '#FF0000'
  });
  assert.equal(component.get('red'), '255');

  component.setProperties({
    hex: '#0000FF'
  });
  assert.equal(component.get('blue'), '255');

  component.setProperties({
    hex: '#00FF00'
  });
  assert.equal(component.get('green'), '255');

  component.setProperties({
    hex: '#000000'
  });
  assert.equal(component.get('red'), '0');
  assert.equal(component.get('blue'), '0');
  assert.equal(component.get('green'), '0');
});
