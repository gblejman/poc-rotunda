import test from 'blue-tape';
import parse from '../../source/urlparser/pathname';

const fixtures = [
  {
    description: 'skips empty pathname',
    str: '',
    expected: {}
  },
  {
    description: 'skips undefined pathname',
    str: undefined,
    expected: {}
  },
  {
    description: 'skips null pathname',
    str: null,
    expected: {}
  },
  {
    description: 'skips empty format',
    str: '/',
    format: '',
    expected: {}
  },
  {
    description: 'skips undefined format',
    str: '/',
    format: undefined,
    expected: {}
  },
  {
    description: 'skips null format',
    str: '/',
    format: null,
    expected: {}
  },
  {
    description: 'complies with happy path',
    str: '/6/api/listings/3',
    format: '/:version/api/:collection/:id',
    expected: {
      version: 6,
      collection: 'listings',
      id: 3
    }
  }
];

fixtures.forEach((fixture) => {

  test(fixture.description, (assert) => {
    assert.deepEqual(parse(fixture.str, fixture.format), fixture.expected);
    assert.end();
  });

});

