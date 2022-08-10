// global counter for incrementing to do list items
var counter = 0;

//log to indicate counter has been created and code is running
console.log("id");

function timetostring(time) {
    // 2022-08-07T00:42
    let date = time.slice(0, 10);
    let currenttime = time.slice(11, time.length)

    return date.concat("<br>", currenttime);

}

function stringtotime(string) {
    // let date = string.split("<br>")
    let date = string.replace("<br>", "T");
    return date;

}

//event handler for clicking add button add button
document.querySelector('#add').onclick = function() {
    //select all inputs and prepare to read from them
    let input = document.querySelectorAll('#addTask input')

    //make sure none of the inputs in empty on click
    if (input[0].value.length == 0 || input[1].value.length == 0 || input[2].value.length == 0) {
        if (input[0].value.length == 0) { //ensure title is not empty
            alert("Please Enter a Title for your task")
        } else if (input[1].value.length == 0) { //ensure task is not empty
            alert("Please Enter a valid Task")
        } else if (input[2].value.length == 0) { //ensure date and time is not empty
            alert("Please expected completion time")
        }

    } else { //if all inputs are valid

        //add a new to do list item as a nested div getElementById
        /* The counter variable is used to increment the div id's for later querying*/
        document.querySelector('#newTask').innerHTML = `<h1>New Tasks</h1>`;
        document.querySelector('#tasks').innerHTML += `
        <div class="task" id=task${counter}>
                <input id=${counter} class="checkbox" type="checkbox" name="checkbox" onclick="toggleCheck(this.id)" />
                <span id="taskname">
                    <div>
                        <div>
                            <p id="title">${input[0].value}</p> 
                            <p>${input[1].value}</p>
                        </div>
                        <div class="timestamp">
                            <p>${timetostring(input[2].value)}</p>
                        </div>
                    </div>
                </span>
                <button class=edit>
                    <i class="glyphicon glyphicon-pencil"></i>
                </button>
                <button class="delete">
                    <i class="glyphicon glyphicon-trash"></i>
                </button>
            </div>
        `;

        //clear inputs after element is created
        for (var i = 0; i < input.length; i++) {
            input[i].value = "";
        }

        //delete functionality through index of delete class and removing parent element
        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }

        //edit functionality through index of edit class
        var edit = document.querySelectorAll(".edit");
        for (var i = 0; i < edit.length; i++) {
            edit[i].onclick = function() { //when specific edit button is clicked
                let edittext = this.parentNode.children[1].querySelectorAll("p") //select all <p> tags in parent element (they should be three)
                for (var i = 0; i < edittext.length - 1; i++) {
                    input[i].value = edittext[i].innerHTML; //for each <p> element read contents and change update value in each inputs(except time)
                }
                input[2].value = stringtotime(edittext[2].innerHTML)

                document.getElementById("update").style.display = "initial"; //show update button
                document.getElementById("add").disabled = true; //disable add button to prevent re-updating list

                //update button functionality
                document.getElementById("update").onclick = function() {

                    //read from the inputs
                    let input = document.querySelectorAll('#addTask input')

                    //make sure no input is empty
                    if (input[0].value.length == 0 || input[1].value.length == 0 || input[2].value
                        .length == 0) {
                        if (input[0].value.length == 0) {
                            alert("Please Enter a Title for your task")
                        } else if (input[1].value.length == 0) {
                            alert("Please Enter a valid Task")
                        } else if (input[2].value.length == 0) {
                            alert("Please expected completion time")
                        }

                    } else {
                        for (var i = 0; i < edittext.length - 1; i++) { //for each input update corresponding <p> html element
                            edittext[i].innerHTML = input[i].value;
                        }

                        edittext[2].innerHTML = timetostring(input[2].value); //time formatting handler

                        for (var i = 0; i < input.length; i++) {
                            //clear all the inputs
                            input[i].value = "";
                        }

                        //hide the update button and enable the add button for new items to be added
                        document.getElementById("update").style.display = "none";
                        document.getElementById("add").disabled = false;

                    }
                }
            }
        }
        //increment counter for every successful item added
        counter++;
    }

}

//using checkbox to change style and appearance of list entry
function toggleCheck(checkboxid) {

    //using checkbox id to get corresponding div id
    let parent = document.getElementById("task" + checkboxid);

    //get current checkbox
    let checkbox = parent.children[0];

    if (checkbox.checked == true) { // if current checkbox is checked
        //confirmation of task completion
        if (confirm("Do you want to mark as this task completed?") == true) {

            parent.classList.add("checked"); //add parent to class checked (green background formatting)
            parent.children[1].style.textDecoration = 'line-through'; // strike through all text in the entry

            return true;
        } else {
            return false;
        }

    } else { // if current checkbox is not checked
        parent.classList.remove("checked"); //remove parent from class checked (default background formatting)
        parent.children[1].style.textDecoration = 'none'; //remove strike through
    }
}