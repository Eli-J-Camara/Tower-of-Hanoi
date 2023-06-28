// Tower and Disc variables
let switchDiv = document.getElementById("switch")
let tower1 = document.getElementById("tower1")
let tower2 = document.getElementById("tower2")
let tower3 = document.getElementById("tower3")
let game = document.getElementById("winDiv")
let element = document.createElement("h1")
let winner = document.createTextNode('YOU WIN!')
let clickCount = 0

//Event listener test code
tower3.addEventListener("mouseover", function() {
    if (tower3.childElementCount == 4) {
        game.style.display = "none"
        element.appendChild(winner)
        element.style.fontSize = "30vw"
        element.style.margin = "30px auto"
        element.style.textAlign = "center"
        document.body.appendChild(element)
    }
})

//Tower 1 click handler
document.getElementById("tower1").addEventListener("click", function() {
    clickCount ++
    if (clickCount%2 != 0 && tower1.childElementCount > 0 && switchDiv.childElementCount == 0) {
        switchDiv.appendChild(event.currentTarget.firstElementChild)
        switchDiv.lastElementChild.style.visibility = "hidden"
    }
    else if (tower1.childElementCount == 0 ||switchDiv.firstElementChild.clientWidth < event.currentTarget.firstElementChild.clientWidth) {
        tower1.insertBefore(switchDiv.firstElementChild, event.currentTarget.firstElementChild)
        tower1.firstElementChild.style.visibility = "inherit"
    }
    console.log(clickCount)
})


//Tower 2 click handle
document.getElementById("tower2").addEventListener("click", function() {
    clickCount ++
    if (clickCount%2 != 0 && tower2.childElementCount > 0 && switchDiv.childElementCount == 0) {
        switchDiv.appendChild(event.currentTarget.firstElementChild)
        switchDiv.lastElementChild.style.visibility = "hidden"
    }
    else if (tower2.childElementCount == 0 ||switchDiv.firstElementChild.clientWidth < event.currentTarget.firstElementChild.clientWidth) {
        tower2.insertBefore(switchDiv.firstElementChild, event.currentTarget.firstElementChild)
        tower2.firstElementChild.style.visibility = "inherit"
    }
    console.log(clickCount)
})

//Tower 3 click handler
document.getElementById("tower3").addEventListener("click", function() {
    clickCount ++
    if (clickCount%2 != 0 && tower3.childElementCount > 0 && switchDiv.childElementCount == 0) {
        switchDiv.appendChild(event.currentTarget.firstElementChild)
        switchDiv.lastElementChild.style.visibility = "hidden"
    }
    else if (tower3.childElementCount == 0 ||switchDiv.firstElementChild.clientWidth < event.currentTarget.firstElementChild.clientWidth) {
        tower3.insertBefore(switchDiv.firstElementChild, event.currentTarget.firstElementChild)
        tower3.firstElementChild.style.visibility = "inherit"
    }
    console.log(clickCount)
})