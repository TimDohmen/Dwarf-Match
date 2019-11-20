export default class Dwarf {
    constructor(data) {
        this.title = data.title
    }

    get Template() {
        return this.title
    }
}