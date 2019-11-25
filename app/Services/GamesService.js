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



  selectCard(cardIndex, callback) {

    if (!store.State.firstGuess.title) {
      let first = store.State.activeDeck[cardIndex]
      first.show = true
      first.flipped
      store.State.firstGuess = first

    } else {
      let second = store.State.activeDeck[cardIndex]
      store.State.secondGuess = second
      second.show = true
      second.flipped
      if (store.State.firstGuess.title == second.title) {
        console.log("chicken dinner")
        store.State.firstGuess = {}
        store.State.SecondGuess = {}
        store.State.guessCount++
        store.State.correctCount++

      } else {
        this.unflipCards(callback)
      }
    }

  }


  async unflipCards(callback) {
    setTimeout(() => {
      store.State.firstGuess.show = false;
      store.State.secondGuess.show = false;
      store.State.firstGuess.flipped
      store.State.secondGuess.flipped
      store.State.firstGuess = {}
      store.State.SecondGuess = {}
      store.State.guessCount++
      callback()
    }, 1500);
  }

  newDeck() {
    let d1 = store.State.cards.map(c => new Card(c))
    let d2 = store.State.cards.map(c => new Card(c))

    store.State.activeDeck = this.shuffle(this.shuffle(d1).concat(this.shuffle(d2)))
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
