const {con} = require('./connectionDb')

function getAllItems() {
    return new Promise((result, reject) => {
        con.query("SELECT * FROM items", (err, data) => {
            if (err) reject(err)
            else result(data)
        })
    })
}

function getItemById(id_items) {
    return new Promise((result, reject) => {
        con.query("SELECT * FROM items WHERE id_items = ?", [id_items], (err, data) => {
            if (err) reject(err)
            else result(data[0])
        })
    })
}

function getItemsByRobot(robot){
    return new Promise((result, reject) => {
        idUser = robot.id_users
        idRobot = robot.id_robots
        con.query(`
        SELECT * 
        FROM items
        JOIN robots_items ON items.id_items = robots_items.id_items
        WHERE robots_items.id_users = ?
        AND robots_items.id_robots = ?`, [idUser, idRobot], (err, data) => {
            if (err) reject(err)
            else result(data)
        })
    })
}

function getEquippedItemsByType(robot, item_type){
    return new Promise((result, reject) => {
        con.query(`
        SELECT *
        FROM items
        JOIN robots_items ON items.id_items = robots_items.id_items
        WHERE robots_items.id_users = ?
        AND robots_items.id_robots = ?
        AND items.type = ?
        AND robots_items.isEquipped = 1`, [robot.id_users, robot.id_robots, item_type], (err, data) => {
            if (err) reject(err)
            else result(data)
        })
    })
}

function getEquippedItemsByRobot(robot){
    return new Promise((result, reject) => {
        idUser = robot.id_users
        idRobot = robot.id_robots
        con.query(`
        SELECT * 
        FROM items
        JOIN robots_items ON items.id_items = robots_items.id_items
        WHERE robots_items.id_users = ?
        AND robots_items.id_robots = ?
        AND robots_items.isEquipped = 1`, [idUser, idRobot], (err, data) => {
            if (err) reject(err)
            else result(data)
        })
    })
}

function unequipItem(robot, id_item){
    return new Promise((result, reject) => {
        con.query("UPDATE robots_items SET isEquipped = 0 WHERE id_users = ? AND id_robots = ? AND id_items = ?", [robot.id_users, robot.id_robots, id_item], (err, data) => {
            if (err) reject(err)
            else result(data[0])
        })
    })
}

function equipItem(robot, id_item){
    return new Promise((result, reject) => {
        con.query("UPDATE robots_items SET isEquipped = 1 WHERE id_users = ? AND id_robots = ? AND id_items = ?", [robot.id_users, robot.id_robots, id_item], (err, data) => {
            if (err) reject(err)
            else result(data[0])
        })
    })
}

module.exports = {
    getItemsByRobot,
    getEquippedItemsByType,
    unequipItem,
    equipItem,
    getEquippedItemsByRobot,
    getItemById,
    getAllItems
}