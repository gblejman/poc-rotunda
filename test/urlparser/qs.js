import test from 'blue-tape';
import parse from '../../source/urlparser/qs';

const fixtures = [
  {
    description: 'skips empty querystring',
    str: '',
    expected: {}
  },
  {
    description: 'skips undefined querystring',
    str: undefined,
    expected: {}
  },
  {
    description: 'skips null querystring',
    str: null,
    expected: {}
  },
  {
    description: 'skips params with missing value',
    str: 'key=',
    expected: {}
  },
  {
    description: 'skips params with missing key',
    str: '=value',
    expected: {}
  },
  {
    description: 'allows coercion of boolean true',
    str: 'key=true',
    expected: {
      key: true
    }
  },
  {
    description: 'allows coercion of boolean false',
    str: 'key=false',
    expected: {
      key: false
    }
  },
  {
    description: 'allows coercion of int',
    str: 'key=999',
    expected: {
      key: 999
    }
  },
  {
    description: 'allows coercion of float',
    str: 'key=10.5',
    expected: {
      key: 10.5
    }
  },
  {
    description: 'complies with happy path',
    str: 'string-value=string&integer-value=10&float-value=10.5&true-value=true&false-value=false&missing-value=&=missing-key&null-value=null',
    expected: {
      "string-value": 'string',
      "integer-value": 10,
      "float-value": 10.5,
      "true-value": true,
      "false-value": false,
      "null-value": null
    }
  }
];

fixtures.forEach((fixture) => {

  test(fixture.description, (assert) => {
    assert.deepEqual(parse(fixture.str), fixture.expected);
    assert.end();
  });

});

