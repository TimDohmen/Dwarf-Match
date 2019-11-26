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

let firstGuess = store.State.firstGuess
let secondGuess = store.State.secondGuess

//Public
class DwarfsService {
  restart(callback) {
    this.newDeck()
    firstGuess = {}
    secondGuess = {}
    store.State.guessCount = 0
    store.State.correctCount = 0
    callback()
  }

  selectCard(cardIndex, callback) {
    if (!firstGuess.title) {
      let firstCard = store.State.activeDeck[cardIndex]
      firstCard.show = true
      firstCard.flipped
      firstCard.index = cardIndex
      firstGuess = firstCard
    } else if (cardIndex == firstGuess.index) {
      return;
    } else if (!secondGuess.title) {
      let secondCard = store.State.activeDeck[cardIndex]
      secondCard.show = true
      secondCard.flipped
      secondGuess = secondCard
      if (firstGuess.title == secondGuess.title) {
        firstGuess = {}
        secondGuess = {}
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
      firstGuess.show = false;
      secondGuess.show = false;
      firstGuess.flipped
      secondGuess.flipped
      firstGuess = {}
      secondGuess = {}
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
