class Shop {

    //Attributs
    #id_shops
    #name
    #id_users
    #id_robots
    #img

    // Constructor
    constructor(id_shops, name, id_users, id_robots, img) {
        this.#id_shops = id_shops
        this.#name = name
        this.#id_users = id_users
        this.#id_robots = id_robots
        this.#img = img
    }
    // Getters
    get id_shops() {
        return this.#id_shops
    }
    get name() {
        return this.#name
    }
    get id_users() {
        return this.#id_users
    }
    get id_robots() {
        return this.#id_robots
    }
    get img() {
        return this.#img
    }

    // Setters
    set id_shops(id_shops) {
        this.#id_shops = id_shops
    }
    set name(name) {
        this.#name = name
    }
    set id_users(id_users) {
        this.#id_users = id_users
    }
    set id_robots(id_robots) {
        this.#id_robots = id_robots
    }
    set img(img) {
        this.#img = img
    }
}

module.exports = Shop