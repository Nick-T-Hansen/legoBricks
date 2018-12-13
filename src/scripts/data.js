const data = {
    postLego (legoToSave) {
        //legoObject in eventListener.js is being passed to data.postLego here. the argument name is not relevant and can be different. argument names are relative to their scope.
        fetch("http://localhost:8088/legos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(legoToSave)
    })
    }
    // deleteLego (legoId) {
    //     //legoObject in eventListener.js is being passed to data.postLego here. the argument name is not relevant and can be different. argument names are relative to their scope.
    //     fetch(`http://localhost:8088/legos/${legoId}`, {
    //     method: "DELETE",
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    //     })
    // }
}
