const {con} = require('./connectionDb')

function getAllNicknames() {
    return new Promise((result, reject) => {
        con.query("SELECT nickname FROM robots", (err, data) => {
            if (err) reject(err)
            else result(data)
        })
    })
}

function createRobot(id_user, nickname, strength, armor, agility, img) {
    robot_img = "/robots/robot_"+ img + ".png"
    return new Promise((result, reject) => {
        con.query(`INSERT INTO robots (id_users, nickname, level, experience, money, hp, strength, armor, agility, img) VALUES (?, ?, 1, 0, 100, 30, ?, ?, ?, ?) `, [id_user, nickname, strength, armor, agility, robot_img], (err, data) => {
            if (err) reject(err)
            else result(data[0])
        })
    })
}

function getRobotsByUser(id_user) {
    return new Promise((result, reject) => {
        con.query("SELECT * FROM robots WHERE id_users = ?", [id_user], (err, data) => {
            if (err) reject(err)
            else result(data)
        })
    })
}

function getAllRobotsExceptUser(id_user) {
    return new Promise((result, reject) => {
        con.query("SELECT * FROM robots WHERE id_users != ?", [id_user], (err, data) => {
            if (err) reject(err)
            else result(data)
        })
    })
}

function getRobotByUserAndId(id_user, id_robots){
    return new Promise((result, reject) => {
        con.query("SELECT * FROM robots WHERE id_users = ? AND id_robots = ?", [id_user, id_robots], (err, data) => {
            if (err) reject(err)
            else result(data[0])
        })
    })
}

function updateRobot(robot){
    return new Promise((result, reject) => {
        con.query("UPDATE robots SET nickname = ?, level = ?, experience = ?, money = ?, hp = ?, strength = ?, armor = ?, agility = ?, img = ? WHERE id_users = ? AND id_robots = ?", [robot.nickname, robot.level, robot.experience, robot.money, robot.hp, robot.strength, robot.armor, robot.agility, robot.img, robot.id_users, robot.id_robots], (err, data) => {
            if (err) reject(err)
            else result(data[0])
        })
    })
}

function updateStatsRobotEquip(robot, items){
    let hp = (+robot.hp) + (+items.modHP)
    let strength = (+robot.strength) + (+items.modStr)
    let armor = (+robot.armor) + (+items.modArm)
    let agility = (+robot.agility) + (+items.modAgi)
    return new Promise((result, reject) => {
        con.query("UPDATE robots SET hp = ?, strength = ?, armor = ?, agility = ? WHERE id_users = ? AND id_robots = ?", [hp, strength, armor, agility, robot.id_users, robot.id_robots], (err, data) => {
            if (err) reject(err)
            else result(data[0])
        })
    })
}

function updateStatsRobotUnequip(robot, items){
    let hp = (+robot.hp) - (+items.modHP)
    let strength = (+robot.strength) - (+items.modStr)
    let armor = (+robot.armor) - (+items.modArm)
    let agility = (+robot.agility) - (+items.modAgi)
    return new Promise((result, reject) => {
        con.query("UPDATE robots SET hp = ?, strength = ?, armor = ?, agility = ? WHERE id_users = ? AND id_robots = ?", [hp, strength, armor, agility, robot.id_users, robot.id_robots], (err, data) => {
            if (err) reject(err)
            else result(data[0])
        })
    })
}

function getRobotByUserAndNickname(id_users, nickname){
    return new Promise((result, reject) => {
        con.query("SELECT * FROM robots WHERE id_users = ? AND nickname = ?", [id_users, nickname], (err, data) => {
            if (err) reject(err)
            else result(data[0])
        })
    })
}

function buyItem(robot, id_item){
    return new Promise((result, reject) => {
        con.query(`INSERT INTO robots_items VALUES (?, ?, ?, 0)`, [robot.id_users, robot.id_robots, id_item], (err, data) => {
            if (err) reject(err)
            else result(data[0])
        })
    })
}

module.exports = {
    getAllNicknames,
    createRobot,
    getRobotsByUser,
    getAllRobotsExceptUser,
    getRobotByUserAndId,
    updateRobot,
    updateStatsRobotEquip,
    updateStatsRobotUnequip,
    getRobotByUserAndNickname,
    buyItem
}