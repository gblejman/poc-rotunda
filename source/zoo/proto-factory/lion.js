import animal from '../proto/animal';

const defaults = {
  animalType: 'lion',
  sound: 'roar',
  legs: 4
};

/**
 * Lion factory
 *
 * @param  {Object} props the new instance properties
 * @return {Object}       the new lion
 */
function factory (props = {}) {

  // create new instance with shared prototype and clone defaults and props into instance
  return Object.assign(Object.create(animal), defaults, props);

}

export default factory;
