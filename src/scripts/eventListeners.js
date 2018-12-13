const eventListeners = {
    handleFormSubmission () {
        //get input values from form (using .value works because this is an input form specifically), otherwise .textContent to get the value of a node
        const creator = document.querySelector("#lego__creator").value;
        const name = document.querySelector("#lego__name").value;
        const shape = document.querySelector("#lego__shape").value;
        const color = document.querySelector("#lego__color").value;
        // debugger once all buttons created to test the value input
        
        // create an object to represent a lego
        const legoObject = {
            creatorName: creator,
            legoName: name,
            legoColor: color,
            LegoShape: shape
        }
        //console.log("legoToSave", legoToSave);
        
        //post to API and pass legoToSave
        data.postLego(legoObject);
    }
};