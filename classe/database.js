const mysql = require('mysql2')
class Database {
    static #instance
    #host
    #user
    #password
    #database
    #port
    #con

    constructor() {
        this.#host = "localhost",
        this.#user = "root",
        this.#password = "",
        this.#database = "robots_battle_v2",
        this.#port = 3306
        this.#con = mysql.createConnection({
            host: this.#host,
            user: this.#user,
            password: this.#password,
            database: this.#database,
            port: this.#port
        })
    }

    static getInstance() {
        if (!this.#instance) {
            this.#instance = new Database()
        }
        return this.#instance
    }

    /*connection() {
        let con = mysql.createConnection({
            host: this.#host,
            user: this.#user,
            password: this.#password,
            database: this.#database,
            port: this.#port
        })
        return con;
    }*/
}
module.exports = Database

  
 /* // usage
  const mongo = new Database('mongo');
  console.log(mongo.getData()); // mongo
  
  const mysql = new Database('mysql');
  console.log(mysql.getData()); // mongo
*/

 /* export class TMDBApi {
    url
    cle
    lang
    constructor() {
        this.url = "http://api.themoviedb.org/3/movie/popular"
        this.cle = SingleApiKey.getInstance().getKey()
        this.lang = "fr-FR"
    }
    getListe(p) {
        return new Promise((result, rej) => {
            fetch(`${this.url}?api_key=${this.cle}&language=${this.lang}&page=${p}`)
                .then(res => res.json())
                .then(data => {
                    result(data)
                })
        })
    }

}

*/


/*let Singleton = (function() {
	let constructor = function() {
		this.methodePublique = function() {
		}
		
		let methodePrivee = function() {
		}
		
		let prop1, prop2;
	}
	
	let instance = null;
	return new function() {
		this.getInstance = function() {
			if (instance == null) {
				instance = new constructor();
				instance.constructor = null;
			}
			
			return instance;
		}
	}
})();*/