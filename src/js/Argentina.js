const fullNameMessi = document.getElementById("fullNameMessi")
const userNameMessi = document.getElementById("userNameMessi")
const teamMessi = document.getElementById("teamMessi")
const userTeamMessi =document.getElementById("userTeamMessi")
const ageMessi = document.getElementById("ageMessi")
const userAgeMessi = document.getElementById("userAgeMessi")

fullNameMessi.addEventListener("click", function() {
    let userNameinput = prompt("Type the player's name") 
    userNameMessi.innerText = userNameinput    
})

teamMessi.addEventListener("click", function() {
    let userTeaminput = prompt("Type the player's team name") 
    userTeamMessi.innerText = userTeaminput    
})

ageMessi.addEventListener("click", function() {
    let userAgeinput = prompt("Type the player's age") 
    userAgeMessi.innerText = userAgeinput    
})

//////////////////////Dybala///////////////////////////////

const fullNameDybala = document.getElementById("fullNameDybala")
const userNameDybala = document.getElementById("userNameDybala")
const teamDybala = document.getElementById("teamDybala")
const userTeamDybala =document.getElementById("userTeamDybala")
const ageDybala = document.getElementById("ageDybala")
const userAgeDybala = document.getElementById("userAgeDybala")

fullNameDybala.addEventListener("click", function() {
    let userNameinput2 = prompt("Type the player's name") 
    userNameDybala.innerText = userNameinput2    
})

teamDybala.addEventListener("click", function() {
    let userTeaminput2 = prompt("Type the player's team name") 
    userTeamDybala.innerText = userTeaminput2    
})

ageDybala.addEventListener("click", function() {
    let userAgeinput2 = prompt("Type the player's age") 
    userAgeDybala.innerText = userAgeinput2    
})

//////////////////////DiMaria///////////////////////////////
const fullNameDimaria = document.getElementById("fullNameDimaria")
const userNameDimaria = document.getElementById("userNameDimaria")
const teamDimaria = document.getElementById("teamDimaria")
const userTeamDimaria =document.getElementById("userTeamDimaria")
const ageDimaria = document.getElementById("ageDimaria")
const userAgeDimaria = document.getElementById("userAgeDimaria")

fullNameDimaria.addEventListener("click", function() {
    let userNameinput3 = prompt("Type the player's name") 
    userNameDimaria.innerText = userNameinput3    
})

teamDimaria.addEventListener("click", function() {
    let userTeaminput3 = prompt("Type the player's team name") 
    userTeamDimaria.innerText = userTeaminput3    
})

ageDimaria.addEventListener("click", function() {
    let userAgeinput3 = prompt("Type the player's age") 
    userAgeDimaria.innerText = userAgeinput3    
})


//////////////////////Btn-tryAgain///////////////////////////////

const BtnTryAgain = document.getElementById("tryAgain")


BtnTryAgain.addEventListener("click" , function name(params) {
    userNameMessi.innerText = ""
    userTeamMessi.innerText = ""
    userAgeMessi.innerText = ""  
    userNameDybala.innerText = "" 
    userTeamDybala.innerText = "" 
    userAgeDybala.innerText = ""
    userNameDimaria.innerText = ""
    userTeamDimaria.innerText = ""
    userAgeDimaria.innerText = ""
})



//////////////////////Btn-sumit///////////////////////////////

const sumit = document.getElementById("sumit")

sumit.addEventListener("click" , function name(params) {

    if( userNameMessi ==="Lionel Andres Messi Cuccittini" && userTeamMessi === "Paris Saint-Germain" && ageMessi === 35){

        alert("correcto")

    } else{
        alert("mal")
    }

    


    
    
    
})


asxa
