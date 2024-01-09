class URI {

    constructor(string) {

        if (!this.isValid(string)) {
            throw new Error('URI is not valid');
        }

        this.string = string;

    }
  
    isValid(uri) {

        // Logique de validation de l'URI (à implémenter selon les critères spécifiques)
        // Retourne true si l'URI est valide, sinon false
        // Par exemple, tu peux utiliser des expressions régulières pour la validation

        return true;
    }

}

module.exports = URI;