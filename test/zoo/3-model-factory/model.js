import test from 'blue-tape';
import model from '../../../source/zoo/3-model-factory/model';

// this test is about having a model that provides
// useful functionality like encapsulation, cloning, props change detection, etc

test('animal creation', (assert) => {

  let actual;
  let expected;

  // define the props and methods for the new object
  let options = {
    props: {
      animalType: 'animal',
      sound: '[sound]',
      legs: 0
    },
    methods: {
      speak (str = '') {
        return str.split(' ').join(` ${this.get('sound')} `);
      }
    }
  };
  let animal = model(options);

  // test internal attrs
  actual = animal.toJson(); // this is now provided by all models
  expected = options.props;
  assert.deepEqual(actual, expected);

  // test speak
  actual = animal.speak('Hello i am animal');
  expected = 'Hello [sound] i [sound] am [sound] animal';
  assert.equal(actual, expected);

  // test set attributes emit change event
  let newAttr = { legs: 10};
  expected = newAttr;

  animal.on('change', (payload) => actual = payload);
  animal.set(newAttr);

  assert.deepEqual(actual, expected);

  // test can emit and listen for events
  let customPayload = { id: 10};
  expected = customPayload;

  animal.on('customEvent', (payload) => actual = payload);
  animal.emit('customEvent', customPayload);
  assert.equal(actual, expected);

  assert.end();
});

