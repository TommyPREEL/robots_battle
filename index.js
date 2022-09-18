const { render } = require('ejs');
const express = require('express')
const User = require('./classe/user')
const Robot = require('./classe/robot')
const Item = require('./classe/item')
const Shop = require('./classe/shop')

const { connectUser, createUser } = require("./model/users")
//const bodyParser = require('body-parser'); // Middleware
var session = require('express-session');
//const { createPoolCluster } = require('mysql2');
const { getAllNicknames, createRobot, getRobotsByUser, getAllRobotsExceptUser, getRobotByUserAndId, updateRobot, updateStatsRobotEquip, updateStatsRobotUnequip, getRobotByUserAndNickname, buyItem} = require('./model/robots');
const { getItemsByRobot, getEquippedItemsByType, equipItem, unequipItem, getEquippedItemsByRobot, getItemById, getAllItems} = require('./model/items');
const { createShop1, createShop2, createShop3, getShopsByIdUserAndIdRobot, getShopById, getItemsInShop, buyItemUpdateShop, createItemsInShop} = require('./model/shops');
const { redirect } = require('express-cookie/lib/response');
/*const db = require('./model/connectionDb')
const con = db.getCon();*/

/*const Database = require('./classe/database')
let db = new Database();*/


const app = express()

app.set('views', './vues');
app.set('view engine', 'ejs');

app.use(express.static("./assets"))
app.use(express.static("./scripts"))
app.use(express.static("./media"));
app.use(express.urlencoded())

app.use(session({secret: "Secreeet",
                userConnected: {},
                selectedRobot: {},
                shop: {}
            })
        );

app.get("/logout", (req, res) => {
    req.session.selectedRobot = null
    req.session.userConnected = null
    res.redirect(`/`)
})

app.get("/", (req, res) => {
    //res.render("sign_in")
    res.render("connection")
    })

app.get("/sign_up", (req, res) => {
    //res.render("sign_up")
    })

app.get("/:id_users/create_robot", (req, res) => {
        res.render("create_robot", {userConnected: req.session.userConnected})
})

app.get("/:id_users/select_robot", (req, res) => {
    getRobotsByUser(req.session.userConnected.id_users).then((data) => {
        res.render("select_robot", {userConnected: req.session.userConnected, robots: data})
    })
})

app.post("/:id_users/create_robot", (req, res) => {
    getAllNicknames().then((data) => {
        for(let i = 0; i < data.length; i++)
        {
            if(data[i]["nickname"] == req.body.nickname){
                res.redirect(`/${req.params.id_users}/create_robot`)
                return;
            }
        }
        // To update to choose the robot img
        let img = (Math.floor(Math.random()*5)+1)
        createRobot(req.session.userConnected.id_users, req.body.nickname, req.body.strength_point, req.body.armor_point, req.body.agility_point, img).then((data) =>{
            getRobotByUserAndNickname(req.session.userConnected.id_users, req.body.nickname).then((data2) =>{
                createShop1(data2.id_users, data2.id_robots).then(() =>{
                    createShop2(data2.id_users, data2.id_robots).then(() =>{
                        createShop3(data2.id_users, data2.id_robots).then(() =>{
                            // To change to give specifics items to specifics shops
                            getAllItems().then((data3) => {
                                getShopsByIdUserAndIdRobot(data2.id_users, data2.id_robots).then((data4) => {
                                    for(let i=0; i<data3.length; i++){
                                        if(i != (data3.length-1)){
                                            createItemsInShop(data4[0].id_shops, data3[i].id_items)
                                        }else{
                                            createItemsInShop(data4[0].id_shops, data3[i].id_items).then(() => {
                                                res.redirect(`/${req.params.id_users}/select_robot`)
                                            })
                                        }
                                    }
                                })
                            })
                        })
                    })
                })
            })
        })
    })

})

app.post("/sign_up", (req, res) => {
    createUser(req.body.email, req.body.password).then((data) => {
        connectUser(req.body.email, req.body.password).then((data2) => {
            let myUser = new User(data2.id_users, data2.email, data2.password)
            req.session.userConnected = /*myUser*/{email : data2.email, id_users:data2.id_users}
            res.redirect(`/${req.session.userConnected.id_users}/create_robot`)
        })
    })
})

app.post("/sign_in", (req, res) => {
    connectUser(req.body.email, req.body.password).then((data) => {
        if(typeof data == 'undefined'){
            //error = {reason: "bad credentials"}
            res.redirect(`/`)
            // res.render("index", {error: error.reason})
        }else{
            let myUser = new User(data.id_users, data.email, data.password)
            req.session.userConnected = /*myUser*/{email : data.email, id_users: data.id_users}
            getRobotsByUser(req.session.userConnected.id_users).then((data) => {
                if(data.length == 0){
                    res.redirect(`/${req.session.userConnected.id_users}/create_robot`)
                }else{
                    res.redirect(`/${req.session.userConnected.id_users}/select_robot`)
                }
            })
        }
    })
})

app.get("/game/:id_users/:id_robots", (req, res) => {
    getRobotByUserAndId(req.params.id_users, req.params.id_robots).then((data) => {
        let myRobot = new Robot(data.id_users, data.id_robots, data.nickname, data.level, data.experience, data.money, data.hp, data.strength, data.armor, data.agility, data.img)
        req.session.selectedRobot = /*myRobot*/ {id_users: data.id_users, id_robots: data.id_robots, nickname: data.nickname, level: data.level, experience: data.experience, money: data.money, hp: data.hp, strength: data.strength, armor: data.armor, agility: data.agility, img: data.img}
        getItemsByRobot(myRobot).then((data2) => {
            getEquippedItemsByRobot(myRobot).then((data3) => {
                let hp = 0;
                let strength = 0;
                let armor = 0;
                let agility = 0;
                for(data of data3){
                    hp += data.modHP
                    strength += data.modStr
                    armor += data.modArm
                    agility += data.modAgi
                }

                let updateStats = {"hp": hp, "strength": strength, "armor": armor, "agility": agility}
                res.render("profil", { robot: req.session.selectedRobot, userConnected: req.session.userConnected, items: data2, updateStats: updateStats})
            })
        })
    })
})

app.get("/game/:id_users/:id_robots/arena", (req, res) => {
    getAllRobotsExceptUser(req.session.userConnected.id_users).then((data) => {
        getRobotByUserAndId(req.params.id_users, req.params.id_robots).then((data_player) => {
            let robot = new Robot(data_player.id_users, data_player.id_robots, data_player.nickname, data_player.level, data_player.experience, data_player.money, data_player.hp, data_player.strength, data_player.armor, data_player.agility, data_player.img)
        res.render("arena", { robot: robot, robots: data, userConnected: req.session.userConnected, selectedRobot: /*req.session.selectedRobot*/req.params.id_robots})
        })
    })
})

app.get("/game/:id_users/:id_robots/fight/:enemy_id_users/:enemy_id_robots", (req, res) => {
    getRobotByUserAndId(req.params.id_users, req.params.id_robots).then((data_player) => {
        let playerRobot = new Robot(data_player.id_users, data_player.id_robots, data_player.nickname, data_player.level, data_player.experience, data_player.money, data_player.hp, data_player.strength, data_player.armor, data_player.agility, data_player.img)
        getRobotByUserAndId(req.params.enemy_id_users, req.params.enemy_id_robots).then((data_enemy_player) => {
            let enemyPlayerRobot = new Robot(data_enemy_player.id_users, data_enemy_player.id_robots, data_enemy_player.nickname, data_enemy_player.level, data_enemy_player.experience, data_enemy_player.money, data_enemy_player.hp, data_enemy_player.strength, data_enemy_player.armor, data_enemy_player.agility, data_enemy_player.img)
            let {message, enemyRobot, robot} = playerRobot.fight(enemyPlayerRobot)
            updateRobot(enemyRobot)
            updateRobot(robot)
            res.render("fight", { playerRobot: playerRobot, enemyPlayerRobot: enemyPlayerRobot, userConnected: req.session.userConnected, combat: message, robot: req.session.selectedRobot})
        })
    })
})

app.get("/header_connected", (req, res) => {
    getRobotByUserAndId(req.params.id_users, req.params.id_robots).then((data) => {
        let myRobot = (new Robot(data.id_users, data.id_robots, data.nickname, data.level, data.experience, data.money, data.hp, data.strength, data.armor, data.agility, data.img))
        res.render("header_connected", { robot: req.session.selectedRobot/*myRobot*/, userConnected: req.session.userConnected})
    })
    
})

app.get("/game/:id_users/:id_robots/equip/:id_items/:item_type", (req, res) => {
    getRobotByUserAndId(req.params.id_users, req.params.id_robots).then((data) => {
        let myRobot = (new Robot(data.id_users, data.id_robots, data.nickname, data.level, data.experience, data.money, data.hp, data.strength, data.armor, data.agility, data.img))
        getEquippedItemsByType(myRobot, req.params.item_type).then((data2) => {
            if(data2.length == 1){
                unequipItem(myRobot, data2[0].id_items).then(() => {
                    getItemById(data2[0].id_items).then((data3) => {
                        updateStatsRobotUnequip(myRobot, data3).then(() => {
                            getRobotByUserAndId(req.params.id_users, req.params.id_robots).then((data5) => {
                                let myRobotUpdated = (new Robot(data5.id_users, data5.id_robots, data5.nickname, data5.level, data5.experience, data5.money, data5.hp, data5.strength, data5.armor, data5.agility, data5.img))
                                equipItem(myRobotUpdated, req.params.id_items).then(() => {
                                    getItemById(req.params.id_items).then((data4) => {
                                        updateStatsRobotEquip(myRobotUpdated, data4).then(() => {
                                            res.redirect(`/game/${req.params.id_users}/${req.params.id_robots}`)
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            }else{
                equipItem(myRobot, req.params.id_items).then(() => {
                    getItemById(req.params.id_items).then((data5) => {
                        updateStatsRobotEquip(myRobot, data5).then(() => {
                            res.redirect(`/game/${req.params.id_users}/${req.params.id_robots}`)
                        })
                    })
                })
            }
        })
    })
})

app.get("/game/:id_users/:id_robots/unequip/:id_items/:item_type", (req, res) => {
    getRobotByUserAndId(req.params.id_users, req.params.id_robots).then((data) => {
        let myRobot = (new Robot(data.id_users, data.id_robots, data.nickname, data.level, data.experience, data.money, data.hp, data.strength, data.armor, data.agility, data.img))
        unequipItem(myRobot, req.params.id_items).then(() => {
            getItemById(req.params.id_items).then((data2) => {
                updateStatsRobotUnequip(myRobot, data2).then(() => {
                    res.redirect(`/game/${req.params.id_users}/${req.params.id_robots}`)
                })
            })
        })
    })
})

app.get("/game/:id_users/:id_robots/shops", (req, res) => {
    getRobotByUserAndId(req.params.id_users, req.params.id_robots).then((data) => {
        let myRobot = (new Robot(data.id_users, data.id_robots, data.nickname, data.level, data.experience, data.money, data.hp, data.strength, data.armor, data.agility, data.img))
        getShopsByIdUserAndIdRobot(data.id_users, data.id_robots).then((data2) => {
            res.render("shops", { robot: req.session.selectedRobot/*myRobot*/, userConnected: req.session.userConnected, shops: data2})
        })
    })
})

app.get("/game/:id_users/:id_robots/shops/:id_shops", (req, res) => {
    getRobotByUserAndId(req.params.id_users, req.params.id_robots).then((data) => {
        let myRobot = (new Robot(data.id_users, data.id_robots, data.nickname, data.level, data.experience, data.money, data.hp, data.strength, data.armor, data.agility, data.img))
        getShopById(req.params.id_shops).then((data2) => {
            let myShop = new Shop(data2.id_shops, data2.name, data2.id_users, data2.id_robots, data2.img)
            getItemsInShop(myShop).then((data3) => {
                res.render("shop", { robot: req.session.selectedRobot/*myRobot*/, userConnected: req.session.userConnected, items:data3, shop: myShop})
            })
        })
    })
})

app.get("/game/:id_users/:id_robots/shops/buy/:id_shops/:id_items", (req, res) => {
    getRobotByUserAndId(req.params.id_users, req.params.id_robots).then((data) => {
        let myRobot = (new Robot(data.id_users, data.id_robots, data.nickname, data.level, data.experience, data.money, data.hp, data.strength, data.armor, data.agility, data.img))
        getItemById(req.params.id_items).then((data2) => {
            if(data2.price <= myRobot.money){
                buyItem(myRobot, req.params.id_items).then(() =>{
                    myRobot.money -= data2.price
                    updateRobot(myRobot).then(() => {
                        buyItemUpdateShop(req.params.id_shops, req.params.id_items).then(() => {
                            res.redirect(`/game/${req.params.id_users}/${req.params.id_robots}/shops/${req.params.id_shops}`)
                        })
                    })
                })
            }else{
                res.redirect(`/game/${req.params.id_users}/${req.params.id_robots}/shops/${req.params.id_shops}`)
            }
        })
    })
})

app.listen(3000)
