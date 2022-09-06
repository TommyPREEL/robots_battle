class CompteBancaire {
    #numero
    #solde
    #titulaire
    constructor(n, s, t) {
        this.#numero = n
        this.#solde = (+s)
        this.#titulaire = t
    }
    get solde() {
        return this.#solde
    }
    get numero() {
        return this.#numero
    }
    get titulaire() {
        return this.#titulaire
    }
    credit(montant) {
        this.#solde += (+montant)
    }
    debit(montant) {
        this.#solde -= montant
    }
}

module.exports = CompteBancaire