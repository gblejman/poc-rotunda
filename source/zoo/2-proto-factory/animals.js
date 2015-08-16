import proto from '../1-just-protos/animal';

// NOTE: each factory should be on its own file, just for demo...

// the point of prototype factories is:
// instead of creating object hierarchies with N levels deep, provide a helper that
// creates a new object linking to a single delegate prototype
// collapses behaviour by cloning/mixing other protos/defaults/custom props


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
  // and clone defaults and custom props into instance with last priority wins
  let defaults = {
    animalType: 'lion',
    legs: 4,
    sound: 'roar'
  };
  return Object.assign(Object.create(proto), defaults, props);
}

/**
 * Creates a new tiger
 * @param  {Object} props the custom props
 * @return {Object}       a tiger
 */
export function tiger (props = {}) {
  let defaults = {
    animalType: 'tiger',
    legs: 4,
    sound: 'grrr'
  };
  return Object.assign(Object.create(proto), defaults, props);
}
