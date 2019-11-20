import Card from "../Models/Card.js";
import store from "../store.js";

var imgRoot = 'assets/cards/'

let _cards = [{
  title: 'Battle Axe',
  url: imgRoot + 'battle-axe.png',
}, {
  title: 'Beard',
  url: imgRoot + 'beard.png',
}, {
  title: 'Beer Stein',
  url: imgRoot + 'beer-stein.png',
}, {
  title: 'BreastPlate',
  url: imgRoot + 'breastplate.png',
}, {
  title: 'Broadsword',
  url: imgRoot + 'broadsword.png',
}, {
  title: 'Brutal Helm',
  url: imgRoot + 'brutal-helm.png',
}, {
  title: 'Crossed Axes',
  url: imgRoot + 'crossed-axes.png',
}, {
  title: 'Emerald',
  url: imgRoot + 'emerald.png',
}, {
  title: 'Hammer',
  url: imgRoot + 'flat-hammer.png',
}, {
  title: 'Gauntlet',
  url: imgRoot + 'mailed-fist.png',
}, {
  title: 'Meat',
  url: imgRoot + 'meat.png',
}, {
  title: 'Pick Axe',
  url: imgRoot + 'mining.png',
}]



//Public
class DwarfsService {

  newDeck() {
    store.State.activeDeck = this.shuffle(this.shuffle(store.State.cards).concat(this.shuffle(store.State.cards)))
  }


  selectCard(card) {
    let first = store.State.firstGuess
    let second = store.State.secondGuess
    if (!store.State.firstGuess) {
      first = card
    } else {
      second = card
    }
    if (first == second) {
      console.log("chicken dinner")
    } else {
      console.log("Try again noob")
    }
  }


  shuffle(deck) {
    //fisher-yates algorithm
    for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck
  }
}

let service = new DwarfsService();
export default service;
