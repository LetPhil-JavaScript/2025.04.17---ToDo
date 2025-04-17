console.log("Welcome to ToDo List!")

// DOM for input
const createTask = document.querySelector("#createTask")
// DOM for add button
const addBtn = document.querySelector("#addBtn")
// Dom for ul container
const liContainer = document.querySelector(".li-container")

// console.log(createTask, addBtn, liContainer)

// Events Listener for add button
// ----- <>
addBtn.addEventListener("click", addToDo)
// ----- <>

function addToDo() {
    const task = createTask.value
    const createLi = document.createElement("div")
    createLi.classList.add("createdTask")
    createLi.innerHTML = 
    `
    <li>${task}<button class="complete-task">Done!</button></li>
    
    `
    liContainer.append(createLi)
    createTask.value = '';
    // DOM for done button
    // --- <>
    const completeTask = createLi.querySelector(".complete-task")
    completeTask.addEventListener("click", toggleDone)

    function toggleDone(){
        const text = createLi.querySelector("li")

        if(text.style.textDecoration === "line-through"){
            text.style.textDecoration = "none"
        } else {
            text.style.textDecoration = "line-through"
            console.log("Task Done!")
        }
    }
  
}

// Clear Input After Task is add
// ----- < DOne! Line 27 >

// ----- <> All Possible Upgrades <> ----- //
// ----- <> --------------------- <> ----- //

// Make "Enter" button relevant. 
// Remove nested Function --> toggleDone
// Remove nested createTask.value = ''; from --> addToDo()
// Add LocalStorage
// Task is Complete say "Good Job!"
// Styles Better
// --- <> Typorgrapy, Different Font, Line Spacing, Move add button, 
// --- <> Header
// Due Dates Create To-Do - Add a Due Date
// List Decoration: none
// Complete Task / Incomplete
// Priority Flag
// Sorting
// CHeckboxes  for visuzlation done and undone
// Put in a table sort by columns. 
// Box-shadow to every li
// Edit Task Name / Delete
// Audio "Ding" when clicked

// ----- <> --------------------- <> ----- //
// ----- <> --------------------- <> ----- //






