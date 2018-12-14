
const domBuilder = {
    //create a dynamic way to make HTML elements using inner HTML instead of create element
    appendInputForm () {
        let inputForm = `<article>
        <fieldset>
        <label for="lego__creator">Creator:</label>
        <input id="lego__creator" name="lego__creator" type="text" autofocus />
        </fieldset>

        <fieldset>
        <label for="lego__name">Name:</label>
        <input id="lego__name" name="lego__name" type="text" autofocus />
        </fieldset>

        <fieldset>
        <label for="lego__shape">Shape:</label>
        <input id="lego__shape" name="lego__shape" type="text" autofocus />
        </fieldset>

        <fieldset id = dropdown_color>
        <label for="lego__color">Color:</label>
        <select id="lego__color" name="lego__color"/>
            <option value="1">Red</option>
        </fieldset>

        <button class="btn lego__save">Save Lego Creation</button>
        </article>`

        /* 
        createElement alternative to innerHTML. Inner HTML puts anything in strings into the place you tell it to go. createElement you don't have to worry about query selector because it already has a reference to the dom.

        let newButton = document.createElement("button");
        newButton.classList.add("btn lego_save);
        newButton.addEventListener("click", eventListeners.handleFormSubmission); 
        displayContainer.appendChild(newButton);
        */

    let displayContainer = document.querySelector("#display-container");
    //move the display container from the dom into the browser
    displayContainer.innerHTML = inputForm;
    }
}


// create a fonction which fetches the colors list, and appends it to the color drop down option


fetch("http://localhost:8088/colors")
.then(colorData => colorData.json())
.then(colorData => {
    colorData.forEach(individualColor => {
        let dropdown_color = document.querySelector("#lego__color"); 
        let colorList = document.createElement("option");
        colorList.innerHTML = individualColor.color;
        dropdown_color.appendChild(colorList);
    });
});