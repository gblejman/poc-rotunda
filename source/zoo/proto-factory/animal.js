import proto from '../proto/animal';

/**
 * Animal factory
 *
 * @param  {Object} props the new instance properties
 * @return {Object}       the new animal
 */
function factory (props = {}) {

  // create new instance with shared prototype and clone props into instance
  let instance = Object.assign(Object.create(proto), props);
  return instance;
}

export default factory;
