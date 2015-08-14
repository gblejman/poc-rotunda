import animal from '../proto/animal';

const defaults = {
  animalType: 'tiger',
  sound: 'grrr',
  legs: 4
};

/**
 * Tiger factory
 *
 * @param  {Object} props the new instance properties
 * @return {Object}       the new tiger
 */
function factory (props = {}) {

  // create new instance with shared prototype and clone defaults and props into instance
  return Object.assign(Object.create(animal), defaults, props);

}

export default factory;
