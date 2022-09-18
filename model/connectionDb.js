const mysql = require('mysql2')
let con;
con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "robots_battle_v2",
    port: 3306
})
/*
module.exports = {
    getCon: function () {
        if (con) return con;
        con = mysql.createCon({
          host     : 'localhost',
          user     : 'root',
          password : '',
          database : 'robots_battle_v2'
        });
        return con;
      }
}*/
module.exports = {
  con
}