import {decode, coerce} from './util';

const defaults = {
  delimiter: {
    param: '&',
    value: '='
  },
  coerce: true
};

/**
 * Parse a querystring into a query object.
 *
 * @param  {String} querystring the query string. Defaults to ''
 * @param  {Object} options     the parsing options. See default options
 * @return {Object}             the resulting query object
 */
function parse (querystring = '', options = defaults) {

  if (querystring === '' || querystring === null) {
    return {};
  }

  return querystring
  .split(options.delimiter.param)
  .map((param) => param.split(options.delimiter.value))
  .filter(([key, value]) => {
     // only keep pairs that have both key and value: skip a=&=1
    return !!key && !!value;
  })
  .reduce((qs, [key, value]) => {
    qs[decode(key)] = options.coerce ? coerce(decode(value)) : decode(value);
    return qs;
  }, {});

}

export default parse;
