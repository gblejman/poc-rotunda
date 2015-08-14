// proto: just a working sample, an examplar object

const proto = {

  // props

  animalType: 'animal', // maybe you want to track the type that complements duck typing
  sound: '[sound]',
  legs: 0,

  // methods

  speak (str = '') {
    return str.split(' ').join(` ${this.sound} `);
  },

  describe () {
    return `${this.animalType} with ${this.legs} legs`;
  }
};

export default proto;
