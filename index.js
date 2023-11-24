// Delay function
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
let mouseInButton = false
// Hover part to give the button a color
document.getElementById("submitButton").addEventListener("mouseenter", async function() {
    mouseInButton = true
    const button = document.getElementById("submitButton");
    await delay(900);
    if (mouseInButton) {
        button.setAttribute("style","background-color: rgb(250, 187, 188)")
    }
})
// Hover away to remove the color
document.getElementById("submitButton").addEventListener("mouseleave", async function() {
    mouseInButton = false
    const button = document.getElementById("submitButton");
    button.setAttribute("style","background-color: white")
})

//===================================================================================================
const taskTable = document.getElementById("taskTable");
let numberOfCreatedRows = 0
let numberOfTotalRows = 0

document.getElementById("submitButton").addEventListener("click", async function() {
    if (document.getElementById("taskNameBox").value.length <= 0 || document.getElementById("taskDescBox").value.length <= 0) {
        const taskNameBox = document.getElementById("taskNameBox")
        const taskDescBox = document.getElementById("taskDescBox")
        taskNameBox.setAttribute("placeholder","Value required here!")
        taskDescBox.setAttribute("placeholder","Value required here!")
        await delay(1000);
        taskNameBox.setAttribute("placeholder","Type task name here")
        taskDescBox.setAttribute("placeholder","Type task description here")
    } else {
        numberOfCreatedRows++;
        numberOfTotalRows++;
        const newRow = document.createElement('tr')
        newRow.setAttribute("id",`rowID-${numberOfCreatedRows}-0`)
        newRow.innerHTML = `
        <th>${document.getElementById("taskNameBox").value}</th>
        <th>${document.getElementById("taskDescBox").value}</th>
        <th>${document.getElementById("taskDateBox").value}</th>
        <th><button onclick="removeRowFunc(${numberOfCreatedRows})" class="removebutton tnrFormat">Remove</button></th>
        `
        taskTable.append(newRow)
    }
    
    if (numberOfTotalRows > 0) {
        const taskTableVisibility = document.getElementById("taskList")
        taskTableVisibility.setAttribute("style","visibility: visible")

    }
})

function removeRowFunc(rowIndex) {
    numberOfTotalRows--;
    const deleteElement = document.getElementById(`rowID-${rowIndex}-0`)
    for (let i = 0; i<4; i++) {
        deleteElement.remove()
    }
    
    if (numberOfTotalRows == 0) {
        const taskTableVisibility = document.getElementById("taskList")
        taskTableVisibility.setAttribute("style","visibility: hidden")

    }
}
