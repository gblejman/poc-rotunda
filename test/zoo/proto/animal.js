import test from 'blue-tape';
import animal from '../../../source/zoo/proto/animal';

test('animal speaks', (assert) => {

  let actual;
  let expected;
  let instance = animal; // the proto itself

  actual = instance.describe();
  expected = 'animal with 0 legs';
  assert.equal(actual, expected);

  actual = instance.speak('Hello i am animal');
  expected = 'Hello [sound] i [sound] am [sound] animal';
  assert.equal(actual, expected);

  assert.end();
});

test('lion speaks', (assert) => {

  let actual;
  let expected;

  // Example 1:
  //
  // attach delegate prototye to new instance and augment new instance with dynamic object extension
  let instance = Object.create(animal);
  instance.animalType = 'lion';
  instance.legs = 4;
  instance.sound = 'roar';

  actual = instance.describe(); // delegation to the prototype
  expected = 'lion with 4 legs';
  assert.equal(actual, expected);

  actual = instance.speak('I am a lion');
  expected = 'I roar am roar a roar lion';
  assert.equal(actual, expected);

  assert.end();
});

test('tiger speaks', (assert) => {

  let actual;
  let expected;

  // Example 2:
  // same as above but using Object.assign

  let instance = Object.assign(Object.create(animal), {
    animalType: 'tiger',
    legs: 4,
    sound: 'grrr'
  });

  actual = instance.describe();
  expected = 'tiger with 4 legs';
  assert.equal(actual, expected);

  actual = instance.speak('Lions suck');
  expected = 'Lions grrr suck';
  assert.equal(actual, expected);

  assert.end();
});

