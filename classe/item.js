class Item {
    #id_items
    #name
    #type
    #modStr
    #modArm
    #modAgi
    #modHP
    #img
    #price
    
    constructor(id_items, name, type, modStr, modArm, modAgi, modHP, img, price) {
        this.#id_items = id_items
        this.#name = name
        this.#type = type
        this.#modStr = modStr
        this.#modArm = modArm
        this.#modAgi = modAgi
        this.#modHP = modHP
        this.#img = img
        this.#price = price
    }
    get id_items() {
        return this.#id_items
    }
    get name() {
        return this.#name
    }
    get type() {
        return this.#type
    }
    get modStr() {
        return this.#modStr
    }
    get modArm() {
        return this.#modArm
    }
    get modAgi() {
        return this.#modAgi
    }
    get modHP() {
        return this.#modHP
    }
    get img() {
        return this.#img
    }
    get price() {
        return this.#price
    }
    set id_items(id_items) {
        this.#id_items = id_items
    }
    set name(name) {
        this.#name = name
    }
    set type(type) {
        this.#type = type
    }
    set modStr(modStr) {
        this.#modStr = modStr
    }
    set modArm(modArm) {
        this.#modArm = modArm
    }
    set modAgi(modAgi) {
        this.#modAgi = modAgi
    }
    set modHP(modHP) {
        this.#modHP = modHP
    }
    set img(img) {
        this.#img = img
    }
    set price(price) {
        this.#price = price
    }
    equip(robot, item){

    }
}

module.exports = Item