/**
 * use HTML, Bootstrap and JavaScript create single page website
 * Bootstrap style table 
 * Bootstrap style form that allows user to add a new row when clicking submit
 */

/**
 * NEED:
 *  BUTTON on click add info to table
 * from input fields
 * and their .value()
 * 
 */

const button= document.getElementById('button')

let number = 0

button.addEventListener('click', (event) =>{
    //event.preventDefault will not make the page refreash
    event.preventDefault()

    //var to hold the values 
    let disneyCharacter = document.getElementById('disneyCharacter').value
    let show = document.getElementById('show').value
    let firstName = document.getElementById('firstName').value

    //create tr node append to form
    let newTableRow = document.createElement('tr')

    let numberNode = document.createElement('td')
    numberNode.innerHTML = number
    newTableRow.append(numberNode)

    let disneyCharacterNode = document.createElement('td')
    disneyCharacterNode.innerHTML = disneyCharacter
    newTableRow.append(disneyCharacterNode)

    let showNode = document.createElement('td')
    showNode.innerHTML = show
    newTableRow.append(showNode)

    let firstNameNode = document.createElement('td')
    firstNameNode.innerHTML = firstName
    newTableRow.append(firstNameNode)

    console.log(newTableRow)

    document.getElementById('tBody').appendChild(newTableRow)


    //this will clear the text box once one has submitted 
    document.getElementById('disneyCharacter').value =""
    document.getElementById('show').value=""
    document.getElementById('firstName').value=""

    //each time a new info is added the number will increase
    number++
})

