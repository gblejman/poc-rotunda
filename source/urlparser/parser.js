// How node sees a url:

// path: /a/b/c?q=baz#bang
// pathname: /a/b/c
// search: ?q=baz
// query: 'q=baz' or {q: baz}
// hash: #bang

// example format = '/:version/api/:collecton/:id';
// example path = '/6/api/listings/3?sort=desc&limit=10#bang';

import parsePathname from './pathname';
import parseQs from './qs';

const defaults = {
  delimiter: {
    segment: '/',
    dynamic: ':',
    query: '?',
    param: '&',
    value: '=',
    fragment: '#'
  },
  coerce: true
};

/**
 * Parse a path into a params/query/fragment object given a path format
 *
 * @param  {String} str     the path.
 * @param  {String} format  the format.
 * @param  {Object} options the parsing options. See default options
 * @return {Object}         the resulting hash object.
 *
 * Ie:
 * path: /6/api/listings/3?sort=desc&limit=10#bang
 * format: /:version/api/:collection/:id
 * result:
 * {
    params: {
      version: 6,
      collection: 'listings',
      id: 3
    },
    query: {
      sort: 'desc',
      limit: 10
    },
    fragment: bang
  }
 */
function parse (str = '', format = '', options = defaults) {

  if (str === '' || str === null || format === '' || format === null) {
    return {
      params: {},
      query: {}
    };
  }

  let url = decodeURI(unescape(str.trim()));

  let [path, fragment] = url.split(options.delimiter.fragment);
  let [pathname, query] = path.split(options.delimiter.query);

  return {
    params: parsePathname(pathname, format, options),
    query: parseQs(query, options),
    fragment: fragment
  };

}

export default parse;
