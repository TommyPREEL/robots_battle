function addStrength() {
    let strength = document.getElementById("strength-point")
    let strength_point = parseInt(document.getElementById("strength-point").value);

    let total = document.getElementById("total-point")
    let total_point = parseInt(document.getElementById("total-point").innerHTML);

    if(total_point > 0 && total_point <= 10 && strength_point < 10){
        strength.value = strength_point + parseInt(1)
        total.innerText = total_point - parseInt(1)
    }   
}

function subStrength() {
    let strength = document.getElementById("strength-point")
    let strength_point = parseInt(document.getElementById("strength-point").value);

    let total = document.getElementById("total-point")
    let total_point = parseInt(document.getElementById("total-point").innerHTML);

    if(strength_point > 0 && total_point < 10 && total_point >= 0){
        strength.value = strength_point - parseInt(1)
        total.innerText = total_point + parseInt(1)
    }
}

function addArmor() {
    let armor = document.getElementById("armor-point")
    let armor_point = parseInt(document.getElementById("armor-point").value);

    let total = document.getElementById("total-point")
    let total_point = parseInt(document.getElementById("total-point").innerHTML);

    if(total_point > 0 && total_point <= 10 && armor_point < 10){
        armor.value = armor_point + parseInt(1)
        total.innerText = total_point - parseInt(1)
    }   
}

function subArmor() {
    let armor = document.getElementById("armor-point")
    let armor_point = parseInt(document.getElementById("armor-point").value);

    let total = document.getElementById("total-point")
    let total_point = parseInt(document.getElementById("total-point").innerHTML);

    if(armor_point > 0 && total_point < 10 && total_point >= 0){
        armor.value = armor_point - parseInt(1)
        total.innerText = total_point + parseInt(1)
    }
}

function addAgility() {
    let agility = document.getElementById("agility-point")
    let agility_point = parseInt(document.getElementById("agility-point").value);

    let total = document.getElementById("total-point")
    let total_point = parseInt(document.getElementById("total-point").innerHTML);

    if(total_point > 0 && total_point <= 10 && agility_point < 10){
        agility.value = agility_point + parseInt(1)
        total.innerText = total_point - parseInt(1)
    }   
}

function subAgility() {
    let agility = document.getElementById("agility-point")
    let agility_point = parseInt(document.getElementById("agility-point").value);

    let total = document.getElementById("total-point")
    let total_point = parseInt(document.getElementById("total-point").innerHTML);

    if(agility_point > 0 && total_point < 10 && total_point >= 0){
        agility.value = agility_point - parseInt(1)
        total.innerText = total_point + parseInt(1)
    }
}

/*function checkNickname(all_nicknames){
    let nickname_available = true;
    let nickname_input = document.getElementById("nickname").value;
    for(let i in all_nicknames){
        if(nickname_input == all_nicknames[i]){
            nickname_available = false;
        }
    }
    console.log(nickname_available)
    console.log(nickname_input)
    //return nickname_available;
    return false;
}*/