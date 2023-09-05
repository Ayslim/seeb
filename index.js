
let seebGiven = document.getElementById('seebgiven')

let seebEaten = document.getElementById('seebeaten')

let count = 0




function giveseed() {

    count = count + 1
    seebGiven.textContent = count

}


function saveseed() {

    seebEaten.textContent  = seebEaten.textContent  + count + ' - '
    seebGiven.textContent = 0
    count = 0


}









