import {EventEmitter} from 'events';

const defaults = {
  props: {},
  methods: {}
};

/**
 * Factory function to create a model object based on a spec.
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

  let attrs = props; // rely on closure to keep attrs private

  const baseModel = {

    set (keyValue) {
      Object.assign(attrs, keyValue);
      this.emit('change', keyValue);
      return this;
    },
    get (name) {
      return attrs[name];
    },
    toJson () {
      return Object.assign({}, attrs);
    }
  };

  const instance = baseModel;

  // add methods
  Object.assign(instance, methods);

  // add emitter functionality to each new object
  Object.assign(instance, EventEmitter.prototype);

  // add props via setter to trigger events/validation/etc
  instance.set(props);

  return instance;
}

export default model;
