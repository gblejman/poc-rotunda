/**
 * Decodes a uri component.
 * Handle things like 'a+spaced+value'
 * @param  {[String} str The uri component
 * @return {String}     [description]
 */
export function decode (str) {
  try {
    // handle encoded + spaces
    return decodeURIComponent(str.replace(/\+/g, ' '));
  } catch (e) {
    return str;
  }
}

/**
 * Coerce a string to a type. Only handles true/false/int/float
 * @param  {String} str the string to coerce.
 * @return {Object}     the coerced object or the same string if none applied
 */
export function coerce (str) {

  if (str === 'null') return null;
  if (str === 'true') return true;
  if (str === 'false') return false;

  let parsed = parseFloat(str);
  if (!isNaN(parsed)) return parsed;

  parsed = parseInt(str, 10);
  if (!isNaN(parsed)) return parsed;

  return str;
}
