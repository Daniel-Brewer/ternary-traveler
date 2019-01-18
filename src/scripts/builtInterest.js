// This module will build the interest
import API from "./api"

// This module will build the HTML interest object
const builtInterest = {
    // This HTML is then returned to the point from where this method was called
    interestBuilder(interestObject) {
        API.getData("places")
            .then(places => {

                let interestArticle = document.createElement("article")

                interestArticle.setAttribute("id", `interest--${interestObject.id}`)

                let interestName = document.createElement("h3")
                interestName.textContent = interestObject.name

                let interestDescription = document.createElement("p")
                interestDescription.textContent = interestObject.description

                let interestCost = document.createElement("p")
                interestCost.textContent = interestObject.cost

                let placesDropdown = document.createElement("select");
                placesDropdown.setAttribute("id", "mySelect");

                let buenosAiresOption = document.createElement("option");
                buenosAiresOption.setAttribute("value", `${places[0].id}`)
                buenosAiresOption.textContent = `${places[0].name}`

                let rioOption = document.createElement("option");
                rioOption.setAttribute("value", `${places[1].id}`)
                rioOption.textContent = `${places[1].name}`

                let santiagoOption = document.createElement("option");
                santiagoOption.setAttribute("value", `${places[2].id}`)
                santiagoOption.textContent = `${places[2].name}`

                placesDropdown.appendChild(buenosAiresOption)
                placesDropdown.appendChild(rioOption)
                placesDropdown.appendChild(santiagoOption)
                interestArticle.appendChild(placesDropdown)


                let editInterestButton = document.createElement("button")
                editInterestButton.textContent = "Edit"
                editInterestButton.addEventListener("click", () => {
                    let articleId = event.target.parentNode.id
                    let interestId = articleId.split("--")[1]
                    API.editData(interestId)
                    // .then(response => {

                })


                let deleteInterestButton = document.createElement("button")
                deleteInterestButton.textContent = "Delete"
                deleteInterestButton.addEventListener("click", () => {
                    let interestId = event.target.parentNode.id.split("--")[1]
                    API.deleteData(interestId)
                })

                interestArticle.appendChild(interestName)
                interestArticle.appendChild(interestDescription)
                interestArticle.appendChild(interestCost)
                interestArticle.appendChild(placesDropdown)
                interestArticle.appendChild(editInterestButton)
                interestArticle.appendChild(deleteInterestButton)

                let outputArticle = document.querySelector(".output__interests")
                outputArticle.appendChild(interestArticle)
                return interestArticle
            })
    }
}
export default builtInterest