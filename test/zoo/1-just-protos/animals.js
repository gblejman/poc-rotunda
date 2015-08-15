import test from 'blue-tape';
import animal from '../../../source/zoo/1-just-protos/animal';

// this test is about linking the new instance to a prototype and just setting
// the properties on it

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

  // just link the delegate prototye to new instance and augment with dynamic object extension
  let instance = Object.create(animal);
  instance.animalType = 'lion';
  instance.legs = 4;
  instance.sound = 'roar';

  actual = instance.describe();
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

  let instance = Object.create(animal);
  instance.animalType = 'tiger';
  instance.legs = 4;
  instance.sound = 'grrr';

  actual = instance.describe();
  expected = 'tiger with 4 legs';
  assert.equal(actual, expected);

  actual = instance.speak('Lions suck');
  expected = 'Lions grrr suck';
  assert.equal(actual, expected);

  assert.end();
});

