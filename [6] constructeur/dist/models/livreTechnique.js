"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivreTechnique = void 0;
const livre_1 = require("./livre");
class LivreTechnique extends livre_1.Livre {
    constructor(titre, auteur, anneePublication = new Date().getFullYear(), prix, domaine, niveau) {
        super(titre, auteur, anneePublication, prix);
        this.domaine = domaine;
        this.niveau = niveau;
    }
    get Domaine() { return this.domaine; }
    set Domaine(domaine) { this.domaine = domaine; }
    get Niveau() { return this.niveau; }
    set Niveau(niveau) { this.niveau = niveau; }
    AfficherLivre() {
        console.log(`Description : \n - ${this.titre} \n - ${this.auteur} \n - ${this.anneePublication}`);
        console.log(` - Domaine : ${this.domaine}`);
        console.log(` - Niveau : ${this.Niveau}`);
    }
}
exports.LivreTechnique = LivreTechnique;
LivreTechnique.tva = 1.21;
