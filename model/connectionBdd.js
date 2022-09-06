const mysql = require('mysql2')

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "robots_battle",
    port: 3306
})

function getAll() {
    return new Promise((result, reject) => {
        con.query("SELECT * FROM compte ", (err, data) => {
            if (err) reject(err)
            else result(data)
        })
    })
}
function getById(id) {
    return new Promise((result, reject) => {
        con.query("SELECT * FROM compte WHERE id_users=?", [id], (err, data) => {
            if (err) reject(err)
            else result(data[0])
        })
    })
}
function update(id, solde) {
    return new Promise((result, reject) => {
        con.query("UPDATE compte set solde=? WHERE id_users=?", [solde, id], (err, data) => {
            if (err) reject(err)
            else result(data)
        })
    })
}

module.exports = {
    con
}