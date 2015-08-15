import proto from '../1-just-protos/animal';

// YES, i should have put each factory in it's own file
// and do something like Object.create(proto), defaults, props)
// so as not to create defaults each time
// but, demo...

// the point of prototype factories is:
// instead of creating object hierarchies with N levels deep provide a helper
// that takes care of creating objects with unique characteristics


/**
 * Creates a new animal
 * @param  {Object} props the custom props
 * @return {Object}       an animal
 */
export function animal (props = {}) {
  return Object.assign(Object.create(proto), props);
}

/**
 * Creates a new lion
 * @param  {Object} props the custom props
 * @return {Object}       a lion
 */
export function lion (props = {}) {
  // create new instance linking animal as its delegate prototype
  // and clone default and custom props into instance with last priority wins
  return Object.assign(Object.create(proto), {
    animalType: 'lion',
    legs: 4,
    sound: 'roar'
  }, props);
}

/**
 * Creates a new tiger
 * @param  {Object} props the custom props
 * @return {Object}       a tiger
 */
export function tiger (props = {}) {
  // same as above
  return Object.assign(Object.create(proto), {
    animalType: 'tiger',
    legs: 4,
    sound: 'grrr'
  }, props);
}
