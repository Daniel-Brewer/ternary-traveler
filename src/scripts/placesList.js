import API from "./api"
// This module will provide the placesList to be displayed 
const interests = {

    // This HTML is then returned to the point from where this method was called
    interestBuilder(interestObject) {
      let interestArticle = document.createElement("article")
  
      interestArticle.setAttribute("id", `interest--${interestObject.id}`)
  
      let interestName = document.createElement("h3")
      interestName.textContent = interestObject.name
      let interestDescription = document.createElement("p")
      interestDescription.textContent = interestObject.description
      let interestCost = document.createElement("p")
      interestCost.textContent = interestObject.cost
  
  
  
      let editinterestButton = document.createElement("button")
      editinterestButton.textContent = "Edit"
      editinterestButton.addEventListener("click", () => {
        let articleId = event.target.parentNode.id
        // research this line more
        let interestId = articleId.split("--")[1]
        interestCollection.getinterest(interestId)
          .then(response => {
            interestEditForm.createAndAppendForm(articleId, response)
          })
      })
  
  
      let deleteinterestButton = document.createElement("button")
      deleteinterestButton.textContent = "Delete"
      deleteinterestButton.addEventListener("click", () => {
        let interestId = event.target.parentNode.id.split("--")[1]
        interestCollection.deleteinterest(interestId)
          .then(response => {
            interestsList.getinterest(response)
          })
      })
  
      interestArticle.appendChild(interestName)
      interestArticle.appendChild(interestDescription)
      interestArticle.appendChild(interestCost)
      interestArticle.appendChild(editinterestButton)
      interestArticle.appendChild(deleteinterestButton)
  
      return interestArticle
    }
  }
const placesList = {

    getPlacesList() {
        // An empty document fragment
        let placeDocFragment = document.createDocumentFragment()

        // 1. Get data
        // The getData method will do a fetch and return a promise. This call will return the data from the API in the response.
        API.getData("places")
            .then(allPlaces => {
                allPlaces.forEach(place => {
                    // console.log("place",place)
                    // fetch all interests
                    API.getData("interests")
                        .then(allinterests => {
                            // Loop through interests to obtain the interest name,description,cost, and review data
                            allinterests.forEach(interest => {
                                if(interest.placeId === place.id) {
                                  let interestHtml = interests.interestBuilder(interest)
                                //   console.log("interestHtml", interestHtml)
                                // console.log(interest)
                                placeDocFragment.appendChild(interestHtml)
                                console.log("placeDocFragment", placeDocFragment)
                                }
                            })
                            // 3. Append the HTML to the DOM            
                            let outputArticle = document.querySelector(".output__places")
                            outputArticle.appendChild(placeDocFragment)
                        })

                    })
            })
        }  
}
export default placesList