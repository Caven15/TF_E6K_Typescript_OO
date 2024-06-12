"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bibliotheque_1 = require("./models/bibliotheque");
const livreTechnique_1 = require("./models/livreTechnique");
// Création d'un livre
const livre1 = new livreTechnique_1.LivreTechnique();
livre1.Titre = "Le seigneur des anneaux";
livre1.AnneePublication = 1954;
livre1.Auteur = "Tolkien";
livre1.Domaine = "SF";
livre1.Niveau = "NB";
livre1.Prix = 25;
const livreTechnique = new livreTechnique_1.LivreTechnique();
livreTechnique.Titre = "Administrations & sécurisations des réseaux";
livreTechnique.AnneePublication = 1997;
livreTechnique.Auteur = "Tintin";
livreTechnique.Domaine = "Informatique";
livreTechnique.Niveau = "Expert";
livreTechnique.Prix = 250;
const livre3 = new livreTechnique_1.LivreTechnique();
livre3.Titre = "Martine à la plage";
livre3.AnneePublication = 2017;
livre3.Auteur = "Gilbert delahaye";
livre3.Domaine = "Enfants";
livre3.Niveau = "6-8 ans";
livre3.Prix = 25;
const bibliotheque = new bibliotheque_1.Biliotheque();
bibliotheque.Nom = "bibliotheque centrale";
bibliotheque.AjouterLivre(livre1);
bibliotheque.AjouterLivre(livreTechnique);
bibliotheque.AjouterLivre(livre3);
// Affichage des livres
bibliotheque.AfficherLivres();
// Obtention et affichage d'un livre
const nomLivreRecherche = "Harryyy Potter";
const livreRecupere = bibliotheque.ObtenirLivre(nomLivreRecherche);
if (livreRecupere) {
    livreRecupere.AfficherLivre();
}
else {
    console.log(`le livre "${nomLivreRecherche}" n'existe pas ...`);
}
// Suppression d'un livre
bibliotheque.SupprimerLivre("Martine à la plage");
console.log("Après suppresion : ");
// Affichage des livres
bibliotheque.AfficherLivres();
console.log("---- Achat ----");
const monNouveauLivre = bibliotheque.AcheterLivre(320, livreTechnique);
monNouveauLivre === null || monNouveauLivre === void 0 ? void 0 : monNouveauLivre.AfficherLivre();
