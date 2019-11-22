import Card from "./Models/Card.js";
let imgRoot = 'assets/cards/'


let _state = {
  activeDeck: [],
  /** @type {Card[]} */
  cards: [new Card({
    title: 'Battle Axe',
    url: imgRoot + 'battle-axe.png',
  }), new Card({
    title: 'Beard',
    url: imgRoot + 'beard.png',
  }), new Card({
    title: 'Beer Stein',
    url: imgRoot + 'beer-stein.png',
  }), new Card({
    title: 'BreastPlate',
    url: imgRoot + 'breastplate.png',
  }), new Card({
    title: 'Broadsword',
    url: imgRoot + 'broadsword.png',
  }), new Card({
    title: 'Brutal Helm',
    url: imgRoot + 'brutal-helm.png',
  }), new Card({
    title: 'Crossed Axes',
    url: imgRoot + 'crossed-axes.png',
  }), new Card({
    title: 'Emerald',
    url: imgRoot + 'emerald.png',
  }), new Card({
    title: 'Hammer',
    url: imgRoot + 'flat-hammer.png',
  }), new Card({
    title: 'Gauntlet',
    url: imgRoot + 'mailed-fist.png',
  }), new Card({
    title: 'Meat',
    url: imgRoot + 'meat.png',
  }), new Card({
    title: 'Pick Axe',
    url: imgRoot + 'mining.png',
  })],
  firstGuess: {},
  secondGuess: {},
  guessCount: 0,
  correctCount: 0,


};

//NOTE You should not need to change the code from this point down

/**
 * Validates the property string is defined in the state
 * @param {string} prop
 */
function _validateProp(prop) {
  if (!_state[prop]) {
    throw new Error(`${prop} is not defined on the state`);
  }
}

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  /**
   * Takes in a property to set, and the value to set it to
   * @param {string} prop
   * @param {any} data
   */
  commit(prop, data) {
    _validateProp(prop);
    _state[prop] = data;
  }
}

const store = new Store();
export default store;
