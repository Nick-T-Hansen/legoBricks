/* TODO ORDER: 
1- create dom elements (form and button) domBuilder.appendInputForm
2- make event listener and attach event listener to button
3- get input values from form (eventListeners.handleFormSubmission)
4- create object to represent a lego (eventlisteners.js)
5- set up database for our legos (database.json) initializing with { "legos": []} is how we will find it on our local server localhost:8088/legos
6- save data to the database (eventlisteners.js and data.js)
*/

/* PRACTICE: create a color object which pulls available colors form a JSON and populates a dropdown menu  the brick form
populate color array(done)
create a function which appends drop down options based on the number of colors in the color object
append the event listener for the color field changes
 */


domBuilder.appendInputForm();
//because we are using innerHTML for the button, we have to use querySelector to get a reference before we append to the dom. 
let legoBtn = document.querySelector(".lego__save");
//test after creating! will get a buttonclass and button element show up in the console
// console.log(legoBtn);
legoBtn.addEventListener("click", eventListeners.handleFormSubmission);