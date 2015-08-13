import _ from 'lodash';
import {decode, coerce} from './util';

const options = {
  delimiter: {
    segment: '/',
    dynamic: ':',
    query: '?',
    param: '&',
    value: '='
  }
};

function parsePathname (pathname, format) {

  let segments = pathname.split(options.delimiter.segment);

  return _
  .chain(format.split(options.delimiter.segment))
  .reduce((params, segment, index) => {
    if (segment.startsWith(options.delimiter.dynamic)) {
      let key = segment.substr(1);
      let value = coerce(segments[index]);
      params[key] = value;
    }
    return params;
  }, {})
  .value();

}

function parseQuerystring (query) {

  return _
  .chain(query.split(options.delimiter.param))
  .map((param) => {
    let [key, value] = param.split(options.delimiter.value);
    return [decode(key), coerce(decode(value))];
  })
  .object() // alias of zipObject()
  .value();

}

/**
 * Parse a path into a hash of parameters given a format
 *
 * @param  {String} path   the path.
 * @param  {String} format the format.
 * @return {Object}        the resulting params object.
 *
 * Ie:
 * path: /6/api/listings/3?sort=desc&limit=10
 * format: /:version/api/:collection/:id
 * result:
 * {
    version: 6,
    collection: 'listings',
    id: 3,
    sort: 'desc',
    limit: 10
  }
 */
function parse (path, format) {

  // TODO: VALIDATE INPUTS

  let hash = {};
  let [pathname, query] = path.split(options.delimiter.query);

  return _.assign(hash, parsePathname(pathname, format), parseQuerystring(query));

}

export default parse;


