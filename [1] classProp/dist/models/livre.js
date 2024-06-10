"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livre = void 0;
class Livre {
    // Prop's
    // Ecriture seule pour le Titre
    set Titre(titre) { this.titre = titre; } // Set
    // Année publication est en lecture seule 
    get AnneePublication() { return this.anneePublication; }
    // Méthodes
    afficherLivre() {
        console.log(`Description : \n - ${this.titre} \n - ${this.auteur} \n - ${this.anneePublication}`);
    }
}
exports.Livre = Livre;
