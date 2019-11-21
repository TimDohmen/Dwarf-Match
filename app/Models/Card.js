export default class Card {
    constructor(data) {
        this.url = data.url
        this.title = data.title
    }

    get Template() {
        return `
        
        <div class="col-3 m-3 p-2 border clickable-card rounded bg-dark" onclick="app.gamesController.selectCard('${this.title}')">
                <img src="${this.url}" alt="">
                <h5>${this.title}</h5>
                 </div>`
    }
}