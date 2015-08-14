import test from 'blue-tape';
import animal from '../../../source/zoo/proto-factory/animal';
import lion from '../../../source/zoo/proto-factory/lion';
import tiger from '../../../source/zoo/proto-factory/tiger';

test('animal speaks', (assert) => {

  let actual;
  let expected;

  let instance = animal();
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

  let instance = lion();

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

  let instance = tiger();

  actual = instance.describe();
  expected = 'tiger with 4 legs';
  assert.equal(actual, expected);

  actual = instance.speak('Lions suck');
  expected = 'Lions grrr suck';
  assert.equal(actual, expected);

  assert.end();
});
