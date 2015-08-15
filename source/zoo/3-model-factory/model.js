// simple model

const defaults = {
  props: {},
  methods: {}
};

/**
 * Creates a model object based on a spec.
 *
 * Props/Methos are segregated so we can distinguish between them and
 * apply privacy to the props, allowing change detection and cloning, etc
 *
 * @param  {Object} {options}         options to build the model from
 * @param  {Object} {options.props}   the model props
 * @param  {Object} {options.methods} the model methods
 * @return {Object}                   an instance of the model
 */
function model ({props, methods} = defaults) {

  // don't copy the props, access by clousure to keep them private
  const obj = {

    set (keyValue) {
      Object.assign(props, keyValue);
      return this;
    },

    get (name) {
      return props[name];
    },

    toJson () {
      return Object.assign({}, props);
    }
  };

  // add methods
  Object.assign(obj, methods);

  return obj;
}

export default model;
