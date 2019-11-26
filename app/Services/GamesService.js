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
  restart(callback) {
    this.newDeck()
    store.State.firstGuess = {}
    store.State.secondGuess = {}
    store.State.guessCount = 0
    store.State.correctCount = 0
    callback()
  }



  selectCard(cardIndex, callback) {

    if (!store.State.firstGuess.title) {
      let first = store.State.activeDeck[cardIndex]
      first.show = true
      first.flipped
      first.index = cardIndex
      store.State.firstGuess = first
    } else if (cardIndex == store.State.firstGuess.index) {
      return;
    } else if (!store.State.secondGuess.title) {
      let second = store.State.activeDeck[cardIndex]
      second.show = true
      second.flipped
      store.State.secondGuess = second
      if (store.State.firstGuess.title == second.title) {
        store.State.firstGuess = {}
        store.State.secondGuess = {}
        store.State.guessCount++
        store.State.correctCount++
        if (store.State.correctCount == 12) {
          callback._drawRestart()
        }
      } else {
        this.unflipCards(callback)
      }
    }
    else {
    }
  }

  unflipCards(callback) {
    setTimeout(() => {
      store.State.firstGuess.show = false;
      store.State.secondGuess.show = false;
      store.State.firstGuess.flipped
      store.State.secondGuess.flipped
      store.State.firstGuess = {}
      store.State.secondGuess = {}
      store.State.guessCount++
      callback._drawGame()
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
