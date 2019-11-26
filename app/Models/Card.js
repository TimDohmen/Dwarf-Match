export default class Card {
    constructor(data) {
        this.url = data.url
        this.title = data.title
        this.show = false

    }

    get flipped() {
        return this.show ? "flipped" : ""
    }


    getTemplate(index) {
        return `
    <div class="flip col-sm-3 p-2 " onclick="app.gamesController.selectCard(${index})">
        <div class="card ${this.flipped}">
        <div class="face back">
            <img src="${this.url}" height="100" alt="">
                <h3>${this.title}</h3>
            </div>
            <div class="face front">
                <h3>Dwarf Match</h3>
                <img src="assets/cards/dwarf-face.png" style="background-color: white;" height="100" alt="Logo">
            </div>
        </div>
    </div> 
               `
    }


}

