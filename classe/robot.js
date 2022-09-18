class Robot {
    #id_users
    #id_robots
    #nickname
    #level
    #experience
    #money
    #hp
    #strength
    #armor
    #agility
    #img

    constructor(id_users, id_robots, nickname, level, experience, money, hp, strength, armor, agility, img) {
        this.#id_users = id_users
        this.#id_robots = id_robots
        this.#nickname = nickname
        this.#level = level
        this.#experience = experience
        this.#money = money
        this.#hp = hp
        this.#strength = strength
        this.#armor = armor
        this.#agility = agility
        this.#img = img
    }
    get id_users() {
        return this.#id_users
    }
    get id_robots() {
        return this.#id_robots
    }
    get nickname() {
        return  this.#nickname
    }
    get level() {
        return this.#level
    }
    get experience() {
        return this.#experience
    }
    get money() {
        return this.#money
    }
    get hp() {
        return this.#hp
    }
    get strength() {
        return this.#strength
    }
    get armor() {
        return this.#armor
    }
    get agility() {
        return this.#agility
    }
    get img() {
        return this.#img
    }
    set nickname(nickname) {
        this.#nickname = nickname
    }
    set level(level) {
        this.#level = level
    }
    set experience(experience) {
        this.#experience = experience
    }
    set money(money) {
        this.#money = money
    }
    set hp(hp) {
        this.#hp = hp
    }
    set strength(strength) {
        this.#strength = strength
    }
    set armor(armor) {
        this.#armor = armor
    }
    set agility(agility) {
        this.#agility = agility
    }
    set img(img) {
        this.#img = img
    }
    fight(enemyRobot){
            let robotHp = this.hp
            let enemyRobotHp = enemyRobot.hp
            let message = "";
            let robotTurn = false
            let dodge = false
            let tabDodge = []
            let random = 0;
            let count = 0;
            let balance = 0;
            let experience = 0;
            while((this.hp > 0) && (enemyRobot.hp > 0) && (count<=60)){
                if(robotTurn){
                    dodge = false
                    message += "<br>Your Turn<br>"
                    tabDodge.splice(0, tabDodge.length)
                    for(let i=0; i<enemyRobot.agility; i++){
                        random = this.getRandomIntInclusive(1,100)
                        if(!tabDodge.includes(random)){
                            tabDodge.push(random)
                        }
                        else{
                            i--;
                        }
                    }
                    random = this.getRandomIntInclusive(1,100)
                    if(tabDodge.includes(random)){
                        dodge = true;
                    }
                    if(dodge){
                        message += "Enemy robot dodge !<br>"
                    }
                    else{
                        if(enemyRobot.armor < this.strength){
                            enemyRobot.hp -= ((+this.strength)-(+enemyRobot.armor))
                            message += "Enemy robot lose " + ((+this.strength)-(+enemyRobot.armor)) + " HP, enemy robot has " + enemyRobot.hp +" HP<br>"
                        }else{
                            if(enemyRobot.armor >= this.strength){
                                message += "Enemy robot has too much armor !<br>"
                            }
                        }
                    }
                }
                else{
                    message += "<br>Enemy Turn<br>"
                    dodge = false
                    tabDodge.splice(0, tabDodge.length)
                    random = 0;
                    for(let i=0; i<this.agility; i++){
                        random = enemyRobot.getRandomIntInclusive(1,100)
                        if(!tabDodge.includes(random)){
                            tabDodge.push(random)
                        }
                        else{
                            i--;
                        }
                    }
                    random = enemyRobot.getRandomIntInclusive(1,100)
                    if(tabDodge.includes(random)){
                        dodge = true;
                    }
                    if(dodge){
                        message += "Your robot dodge !<br>"
                    }
                    else{
                        if(this.armor < enemyRobot.strength){
                            this.hp -= ((+enemyRobot.strength)-(+this.armor))
                            message += "Your robot lose " + ((+enemyRobot.strength)-(+this.armor)) + " HP, your robot has " + this.hp +" HP<br>"
                        }else{
                            if(this.armor >= enemyRobot.strength){
                                message += "Your robot has too much armor !<br>"
                            }
                        }
                    }
                }
                if(enemyRobot.hp <=0){
                    message += "<br>You win !<br>"
                    balance = Math.ceil(enemyRobot.money/10)
                    this.money += balance;
                    enemyRobot.money -= balance;
                    experience = 100
                    this.experience += experience;
                    message += "<br>You earn " + balance + " gold and " + experience + " experience point !";
                }
                else{
                    if(this.hp <=0){
                        message += "<br>You lose..<br>"
                        balance = Math.ceil(this.money/10)
                        this.money -= balance;
                        enemyRobot.money += balance;
                        experience = 50
                        enemyRobot.experience += experience;
                        this.experience += experience;
                        message += "<br>You lose " + balance + " gold but you earn " + experience + " experience point";
                    }else{
                        if(count==60 && this.hp >0 && enemyRobot.hp >0){
                            experience = 50
                            enemyRobot.experience += experience;
                            this.experience += experience;
                            message += "<br>End of the match. It's a draw.. You earn " + experience + " experience point !";
                        }
                    }
                }
                robotTurn = !robotTurn;
                count++;
            }
            enemyRobot.hp = enemyRobotHp
            this.hp = robotHp
            return {message: message, enemyRobot: enemyRobot, robot: this}
        }
    
    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min +1)) + min;
     }
}

module.exports = Robot