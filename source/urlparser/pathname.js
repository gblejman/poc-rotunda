import {coerce} from './util';

const defaults = {
  delimiter: {
    segment: '/',
    dynamic: ':'
  },
  coerce: true
};

/**
 * Parse a pathname into a params object given a format.
 *
 * @param  {String} pathname the pathname. Defaults to ''
 * @param  {String} format   the format. Defaults to ''
 * @param  {Object} options  the parsing options. See default options
 * @return {Object}          the resulting params object
 */
function parse (pathname = '', format = '', options = defaults) {

  if (pathname === '' || pathname === null || format === '' || format === null) {
    return {};
  }

  let segments = pathname.split(options.delimiter.segment);

  return format
  .split(options.delimiter.segment)
  .reduce((params, segment, index) => {
    if (segment.startsWith(options.delimiter.dynamic)) {
      let key = segment.substr(1);
      let value = options.coerce ? coerce(segments[index]) : segments[index];
      params[key] = value;
    }
    return params;
  }, {});

}

export default parse;
