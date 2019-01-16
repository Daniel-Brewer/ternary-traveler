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
    postNewData(resource,payload) {
        return fetch(`http://localhost:8088/${resource}`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        })

}
}
export default API
// saveInterest saves new point of interest to database resource "interests" using the "POST" method

// editData edits the parameter passed (cost and review) to current point of interest using "PUT"method

// deleteInterest deletes the point of interest whose id is passed passed as a parameter using the "DELETE" method
