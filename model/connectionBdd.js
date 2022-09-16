const mysql = require('mysql2')

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "robots_battle_v2",
    port: 3306
})

module.exports = {
    con
}