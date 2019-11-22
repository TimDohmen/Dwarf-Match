export default class Card {
    constructor(data) {
        this.url = data.url
        this.title = data.title
        this.show = false
    }

    get flipped() {
        return this.show ? "flipped" : ""
    }


    get Template() {
        return `
    <div class="flip col-sm-3" onclick="app.gamesController.selectCard('${this.title}')">
        <div class="card ${this.flipped}">
            <div class="face front">
                <img src="assets/cards/dwarf-face.png" style="background-color: white;" height="120" alt="Logo">
                <h3>Dwarf Match</h3>
            </div>
            <div class="face back">
            <img src="${this.url}" height="80" alt="">
                <h3>${this.title}</h3>
            </div>
        </div>
    </div> 
               `
    }

    //  <div class="col-3 m-3 p-2 border clickable-card rounded bg-dark" onclick="app.gamesController.selectCard('${this.title}')">
    // <img src="${this.url}" alt="">
    //     <h5>${this.title}</h5>
    //              </div>
}

