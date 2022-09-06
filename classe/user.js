class User {
    #id_users
    #email
    #password
    
    constructor(id_users, email, password) {
        this.#id_users = id_users
        this.#email = email
        this.#password = password
    }
    get id_users() {
        return this.#id_users
    }
    get email() {
        return this.#email
    }
    get password() {
        return this.#password
    }
}

module.exports = User