"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const livreTechnique_1 = require("./models/livreTechnique");
// Créations livres
const livre1 = new livreTechnique_1.LivreTechnique();
livre1.Titre = "Le seigneur des anneaux";
livre1.AnneePublication = 1954;
livre1.Auteur = "Tolkien";
livre1.Domaine = "SF";
livre1.Niveau = "NB";
livre1.Prix = 25;
const livre2 = new livreTechnique_1.LivreTechnique();
livre2.Titre = "Administrations & sécurisations des réseaux";
livre2.AnneePublication = 1997;
livre2.Auteur = "Tintin";
livre2.Domaine = "Informatique";
livre2.Niveau = "Expert";
livre2.Prix = 250;
// Utilisation du polymorphisme pour manipuler les livres via l'interface ILivre
const livres = [livre1, livre2];
// Parcourir chaque livre et afficher ses détails
console.log("--- ILivre ---");
livres.forEach(livre => {
    livre.AfficherLivre();
    console.log(`Prix : ${livre.Prix}`); // ReadOnly
});
// Manipulation spécifique aux livres techniques
// On caste les objets pour utiliser les propriétés et méthodes spécifiques à ILivretechnique
const LivresTechniques = [livre1, livre2];
// PArcourir chaque livre technique et afficher les détails spécifiques
console.log("--- ILivreTechnique ---");
LivresTechniques.forEach(livreTechnique => {
    console.log(`Domaine : ${livreTechnique.Domaine}`);
    console.log(`Niveau : ${livreTechnique.Niveau}`);
});
