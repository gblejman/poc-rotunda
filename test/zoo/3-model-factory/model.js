import test from 'blue-tape';
import model from '../../../source/zoo/3-model-factory/model';

// this test is about having a model that provides
// useful functionality like encapsulation, cloning, props change detection, etc

test('animal speaks', (assert) => {

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

  let actual;
  let expected;
  let instance = animal;

  actual = instance.toJson(); // this is provided by all models
  expected = options.props;

  assert.deepEqual(actual, expected);

  actual = instance.speak('Hello i am animal');
  expected = 'Hello [sound] i [sound] am [sound] animal';
  assert.equal(actual, expected);

  assert.end();
});
