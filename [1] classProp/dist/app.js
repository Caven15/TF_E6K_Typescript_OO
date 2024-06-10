"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const livre_1 = require("./models/livre");
// Création d'un livre
const livre1 = new livre_1.Livre();
livre1.Titre = "Le seigneur des anneaux";
console.log(livre1.Titre);
// livre1.AnneePublication = 15 // Renvoie une erreur de par la logique des prop's
// auteur libre en écriture et en lecture
livre1.auteur = "Tolkien";
console.log(livre1.auteur);
livre1.afficherLivre();
