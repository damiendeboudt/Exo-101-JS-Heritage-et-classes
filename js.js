class Vehicule {

    constructor(roues, marques, peinture) {
        this.roues = roues;
        this.marques = marques;
        this.peinture = peinture;
    }

    demarer() {
        console.log("je demare")
    }
}

class Velo extends Vehicule {

    constructor(roues, marques, peinture, nbrerayons, typePeinture) {
        super(roues, marques, peinture);
        this.nbreRayons = nbrerayons;
        this.typePeinture = typePeinture;
    }

    monter () {
        console.log("Je monte sur mon vélo")
    }
}

let giant = new Velo(4, "Giant", "black", 24, "brillant")
giant.monter()

class voiture extends Vehicule {

    constructor(roues, marques, peinture, assurance, proprietaire) {
        super(roues, marques, peinture);
        this.assurance = assurance;
        this.proprietaire = proprietaire;
    }
    carwash() {
        console.log("Je suis toute propre")
    }
}

let Megane = new voiture(4, "Renault", "Blue", "Macif", "Mr Deboudt")
Megane.carwash()