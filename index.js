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
//number starting at 0 on table
let number = 0

button.addEventListener('click', (event) =>{
    //event.preventDefault will not make the page refreash
    event.preventDefault()

    // 3 variables to hold the values 
    let disneyCharacter = document.getElementById('disneyCharacter').value
    let show = document.getElementById('show').value
    let firstName = document.getElementById('firstName').value

    //create tr node append to form
    let newTableRow = document.createElement('tr')

    // the table data to hold hold all four 
    //1
    let numberNode = document.createElement('td')
    numberNode.innerHTML = number
    newTableRow.append(numberNode)

    //2
    let disneyCharacterNode = document.createElement('td')
    disneyCharacterNode.innerHTML = disneyCharacter
    newTableRow.append(disneyCharacterNode)

    //3
    let showNode = document.createElement('td')
    showNode.innerHTML = show
    newTableRow.append(showNode)

    //4
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

