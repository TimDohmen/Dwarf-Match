import _gamesService from "../Services/GamesService.js";
import _store from '../store.js'

function _drawGame() {
  let template = ''
  _store.State.activeDeck.forEach((card, i) => template += card.getTemplate(i))
  document.querySelector("#cards").innerHTML = template

}
function _count() {
  document.querySelector("#guessCount").innerHTML = _store.State.guessCount.toString()
  document.querySelector("#correctCount").innerHTML = _store.State.correctCount.toString()
}
//Public
export default class GamesController {
  constructor() {
    _gamesService.newDeck()
    _drawGame()
  }


  selectCard(cardIndex) {
    _gamesService.selectCard(cardIndex, _drawGame)
    _count()
    _drawGame()
  }


}
