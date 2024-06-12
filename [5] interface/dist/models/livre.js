"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livre = void 0;
class Livre {
    // Prop's
    get Titre() { return this.titre; }
    set Titre(titre) { this.titre = titre; }
    get Auteur() { return this.auteur; }
    set Auteur(auteur) { this.auteur = auteur; }
    set AnneePublication(anneePublication) { this.anneePublication = anneePublication; }
    get AnneePublication() { return this.anneePublication; }
    set Prix(prix) { this.prix = prix; }
    get Prix() { return this.prix; }
}
exports.Livre = Livre;
