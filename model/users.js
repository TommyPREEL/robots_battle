const {con} = require('./connectionBdd')

function connectUser(mail, pwd) {
    return new Promise((result, reject) => {
        con.query("SELECT * FROM users WHERE email = ? AND password = ?", [mail, pwd], (err, data) => {
            if (err) reject(err)
            else result(data[0])
        })
    })
}

function createUser(mail, pwd) {
    return new Promise((result, reject) => {
        con.query("INSERT INTO users (email, password) VALUES (?, ?) ", [mail, pwd], (err, data) => {
            if (err) reject(err)
            else result(data[0])
        })
    })
}

module.exports = {
    connectUser,
    createUser
}