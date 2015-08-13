import test from 'blue-tape';
import parse from '../../source/urlparser/parser-lodash';

test('parses with lodash', (assert) => {

  let str = '/6/api/listings/3?sort=desc&limit=10';
  let format = '/:version/api/:collection/:id';
  let expected = {
    version: 6,
    collection: 'listings',
    id: 3,
    sort: 'desc',
    limit: 10
  };

  assert.deepEqual(parse(str, format), expected);
  assert.end();
});

