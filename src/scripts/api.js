// This module makes the fetch calls

// getData fetches the resource that is passed as a parameter using the "POST" method
const API = {

    getData(resource) {
        return fetch(`http://localhost:8088/${resource}`)
        .then(response => response.json())
    },
    getPayloadData(resource, payload) {
        return fetch(`http://localhost:8088/${resource}/${payload}`)
        .then(response => response.json())
    },
    // saveInterest saves new point of interest to database resource "interests" using the "POST" method

saveData(object) {
    return fetch("http://localhost:8088/interests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(object)
    })
},
// editData edits the parameter passed (cost and review) to current point of interest using "PUT"method
    editData(resource,payload) {
        return fetch(`http://localhost:8088/${resource}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
},

// deleteInterest deletes the point of interest whose id is passed passed as a parameter using the "DELETE" method
deleteData(resource,resourceId) {
    return fetch(`http://localhost:8088/${resource}/${resourceId}`, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json"
    },
})
}

}
export default API