export class Livre{
    // Attributs
    private titre! : string
    auteur! : string
    private anneePublication! : number

    // Prop's

    // Ecriture seule pour le Titre
    set Titre(titre : string) {this.titre = titre} // Set

    // Année publication est en lecture seule 
    get AnneePublication() :number {return this.anneePublication}

    // Méthodes
    afficherLivre() : void{
        console.log(`Description : \n - ${this.titre} \n - ${this.auteur} \n - ${this.anneePublication}`);
    }
}