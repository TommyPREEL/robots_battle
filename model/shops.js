const {con} = require('./connectionDb')

function createShop1(id_user, id_robots){
    return new Promise((result, reject) => {
        con.query(`INSERT INTO shops (name, id_users, id_robots, img) VALUES ("The Fireball", ?, ?, "/shops/the_fireball.png")`, [id_user, id_robots], (err, data) => {
            if (err) reject(err)
            else result(data[0])
        })
    })
}

function createItemsInShop(id_shops, id_items){
    return new Promise((result, reject) => {
        con.query(`INSERT INTO shops_items VALUES (?, ?)`, [id_shops, id_items], (err, data) => {
            if (err) reject(err)
            else result(data[0])
        })
    })
}

function createShop2(id_user, id_robots){
    return new Promise((result, reject) => {
        con.query(`INSERT INTO shops (name, id_users, id_robots, img) VALUES ("The Equinox", ?, ?, "/shops/the_equinox.jpg")`, [id_user, id_robots], (err, data) => {
            if (err) reject(err)
            else result(data[0])
        })
    })
}

function createShop3(id_user, id_robots){
    return new Promise((result, reject) => {
        con.query(`INSERT INTO shops (name, id_users, id_robots, img) VALUES ("Runes and Rods", ?, ?, "/shops/runes_and_rods.jpeg")`, [id_user, id_robots], (err, data) => {
            if (err) reject(err)
            else result(data[0])
        })
    })
}

function getShopsByIdUserAndIdRobot(id_user, id_robots){
    return new Promise((result, reject) => {
        con.query(`SELECT * FROM shops WHERE id_users = ? AND id_robots = ?`, [id_user, id_robots], (err, data) => {
            if (err) reject(err)
            else result(data)
        })
    })
}

function getShopById(id_shops){
    return new Promise((result, reject) => {
        con.query(`SELECT * FROM shops WHERE id_shops = ? `, [id_shops], (err, data) => {
            if (err) reject(err)
            else result(data[0])
        })
    })
}

function getItemsInShop(shop){
    return new Promise((result, reject) => {
        con.query(`
        SELECT DISTINCT items.id_items, items.name, items.type, items.modStr, items.modArm, items.modAgi, items.modHP, items.img, items.price
        FROM items
        JOIN shops_items ON shops_items.id_items = items.id_items
        WHERE shops_items.id_shops = ?
        `, [shop.id_shops], (err, data) => {
            if (err) reject(err)
            else result(data)
        })
    })
}


function buyItemUpdateShop(id_shop, id_item){
    return new Promise((result, reject) => {
        con.query(`
        DELETE FROM shops_items
        WHERE id_shops = ?
        AND id_items = ?
        `, [id_shop, id_item], (err, data) => {
            if (err) reject(err)
            else result(data)
        })
    })
}

module.exports = {
    createShop1,
    createShop2,
    createShop3,
    getShopsByIdUserAndIdRobot,
    getShopById,
    getItemsInShop,
    buyItemUpdateShop,
    createItemsInShop
}