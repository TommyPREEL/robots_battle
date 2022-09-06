function verifyPassword(){
    let password = document.getElementById("password")
    let confirm_password = document.getElementById("confirm-password")
    if((password.value != confirm_password.value) || (password.value == "") || (confirm_password.value == "")){
        if(document.getElementById("error-password") == null){
            let newDiv = document.createElement("div")
            newDiv.setAttribute("id", "error-password")
            let newContent = document.createTextNode("Check passwords !")
            newDiv.appendChild(newContent)
            document.body.insertBefore(newDiv, document.getElementById("form").nextSibling)
        }
        return false;
    }else return true;
}