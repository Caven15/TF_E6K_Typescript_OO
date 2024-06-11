"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bibliotheque_1 = require("./models/bibliotheque");
const livre_1 = require("./models/livre");
const livreTechnique_1 = require("./models/livreTechnique");
// Création d'un livre
const livre1 = new livre_1.Livre();
livre1.Titre = "Le seigneur des anneaux";
livre1.AnneePublication = 1954;
livre1.auteur = "Tolkien";
const livreTechnique = new livreTechnique_1.LivreTechnique();
livreTechnique.Titre = "Administrations & sécurisations des réseaux";
livreTechnique.AnneePublication = 1997;
livreTechnique.auteur = "Tintin";
livreTechnique.Domaine = "Informatique";
livreTechnique.Niveau = "Expert";
const livre3 = new livre_1.Livre();
livre3.Titre = "Martine à la plage";
livre3.AnneePublication = 2017;
livre3.auteur = "Gilbert delahaye";
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
