import test from 'blue-tape';
import parse from '../../source/urlparser/parser';

const fixtures = [
  {
    description: 'skips empty pathname',
    str: '',
    expected: {
      params: {},
      query: {}
    }
  },
  {
    description: 'skips undefined pathname',
    str: undefined,
    expected: {
      params: {},
      query: {}
    }
  },
  {
    description: 'skips null pathname',
    str: null,
    expected: {
      params: {},
      query: {}
    }
  },
  {
    description: 'skips empty format',
    str: '/',
    format: '',
    expected: {
      params: {},
      query: {}
    }
  },
  {
    description: 'skips undefined format',
    str: '/',
    format: undefined,
    expected: {
      params: {},
      query: {}
    }
  },
  {
    description: 'skips null format',
    str: '/',
    format: null,
    expected: {
      params: {},
      query: {}
    }
  },
  {
    description: 'complies with happy path',
    str: '/6/api/listings/3?sort=desc&limit=10&string-value=string&integer-value=10&float-value=10.5&true-value=true&false-value=false&missing-value=&=missing-key&null-value=null#bang',
    format: '/:version/api/:collection/:id',
    expected: {
      params: {
        version: 6,
        collection: 'listings',
        id: 3
      },
      query: {
        "sort": 'desc',
        "limit": 10,
        "string-value": 'string',
        "integer-value": 10,
        "float-value": 10.5,
        "true-value": true,
        "false-value": false,
        "null-value": null
      },
      fragment: 'bang'
    }
  },
  {
    description: 'complies with happy path - url encoded',
    str: '%2F6%2Fapi%2Flistings%2F3%3Fsort%3Ddesc%26limit%3D10%26string-value%3Dstring%26integer-value%3D10%26float-value%3D10.5%26true-value%3Dtrue%26false-value%3Dfalse%26missing-value%3D%26%3Dmissing-key%26null-value%3Dnull%23bang',
    format: '/:version/api/:collection/:id',
    expected: {
      params: {
        version: 6,
        collection: 'listings',
        id: 3
      },
      query: {
        "sort": 'desc',
        "limit": 10,
        "string-value": 'string',
        "integer-value": 10,
        "float-value": 10.5,
        "true-value": true,
        "false-value": false,
        "null-value": null
      },
      fragment: 'bang'
    }
  }
];

fixtures.forEach((fixture) => {

  test(fixture.description, (assert) => {
    assert.deepEqual(parse(fixture.str, fixture.format), fixture.expected);
    assert.end();
  });

});

