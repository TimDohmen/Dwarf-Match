import _gamesService from "../Services/GamesService.js";
import _store from '../store.js'

function _drawGames() {
  let template = ''
  _store.State.activeDeck.forEach(card => template += card.Template)
  document.querySelector("#cards").innerHTML = template
}

//Public
export default class GamesController {
  constructor() {
    _gamesService.newDeck()
    _drawGames()
  }


  selectCard(cardTitle) {
    _gamesService.selectCard(cardTitle)
    // _drawGames()
  }

}
