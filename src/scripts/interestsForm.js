import API from "./api"
// This module will have the interest form to be filled out

const interestsForm = {
  
    // This module will build a form and append it to the DOM. The form will contain input fields for a user to add a new interests to their refrigerator and a button with an event listener that will listen for the click
    createInterestForm () {
      // 1. Build HTML form
      let interestsContainer = document.createElement("container")
      interestsContainer.setAttribute("id", `interest--${value.id}`)
      let formHeader = document.createElement("h3")
      let saveInterestButton = document.createElement("button")
      formHeader.appendChild(saveInterestButton);
      formHeader.textContent = "Add an interest"
      // EventListener for Button Click
      saveInterestButton.addEventListener("click", this.saveInterest("interests"));
  
      let interestsNameField = document.createElement("fieldset")
      let interestsNameLabel = document.createElement("label")
      interestsNameLabel.textContent = "Name"
      interestsNameLabel.setAttribute("for", "interests__name")
      let interestsNameInput = document.createElement("input")
      interestsNameInput.setAttribute("id", "interests__name")
      interestsNameInput.setAttribute("name", "interests__name")
  
      interestsNameField.appendChild(interestsNameLabel)
      interestsNameField.appendChild(interestsNameInput)
  
      let interestsDescriptionField = document.createElement("fieldset")
      let interestsDescriptionLabel = document.createElement("label")
      interestsDescriptionLabel.textContent = "Description"
      interestsDescriptionLabel.setAttribute("for", "interests__Description")
      let interestsDescriptionInput = document.createElement("input")
      interestsDescriptionInput.setAttribute("id", "interests__Description")
      interestsDescriptionInput.setAttribute("name", "interests__Description")
  
      interestsDescriptionField.appendChild(interestsDescriptionLabel)
      interestsDescriptionField.appendChild(interestsDescriptionInput)
  
      let interestsCostField = document.createElement("fieldset")
      let interestsCostLabel = document.createElement("label")
      interestsCostLabel.textContent = "Cost"
      interestsCostLabel.setAttribute("for", "interests__Cost")
      let interestsCostInput = document.createElement("input")
      interestsCostInput.setAttribute("id", "interests__Cost")
      interestsCostInput.setAttribute("name", "interests__Cost")
  
      interestsCostField.appendChild(interestsCostLabel)
      interestsCostField.appendChild(interestsCostInput)

      let interestsReviewField = document.createElement("fieldset")
      let interestsReviewLabel = document.createElement("label")
      interestsReviewLabel.textContent = "Review"
      interestsReviewLabel.setAttribute("for", "interests__Review")
      let interestsReviewInput = document.createElement("input")
      interestsReviewInput.setAttribute("id", "interests__Review")
      interestsReviewInput.setAttribute("name", "interests__Review")

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
      interestsContainer.appendChild(placesDropdown)
      interestsReviewField.appendChild(interestsReviewLabel)
      interestsReviewField.appendChild(interestsReviewInput)
      
      let addInterestButton = document.createElement("button")
      addInterestButton.textContent = "Save interests"
      addInterestButton.setAttribute("class", "interests__save")

      interestsContainer.appendChild(addInterestButton);
 
      // 2. EventListener for Button Click

      addInterestButton.addEventListener("click", this.handleAddNewInterests)
  
      // 3. Append the HTML form to the DOM
      //Notice that I have added an article element to my index.html with the class "form".
      let interestsFormFragment = document.createDocumentFragment()
      interestsFormFragment.appendChild(formHeader)
      interestsFormFragment.appendChild(interestsNameField)
      interestsFormFragment.appendChild(interestsDescriptionField)
      interestsFormFragment.appendChild(interestsCostField)
      interestsFormFragment.appendChild(interestsReviewField)
      interestsFormFragment.appendChild(submitButton)
  
      let formArticle = document.querySelector(".output__interests")
      formArticle.appendChild(interestsFormFragment)
  
    },
    // This module will also contain the function that executes when the button in the form is clicked. When the button in the form is clicked, the following will happen:
    handleAddNewInterests (event) {
      // 1. Get user input that user entered
      let inputInterestsName = document.querySelector("#interests__name").value
      let inputInterestsDescription = document.querySelector("#interests__Description").value
      let inputInterestsCost = document.querySelector("#interests__Cost").value
      let inputInterestsReview = document.querySelector("#interests__Review").value
      let inputInterestsPlace = document.querySelector("#interests__Place").value
  
      // 2. Create a new object with the same structure we have been using throughout the application to represent a interests item:
  
      let newInterests = {
        name: inputInterestsName,
        description: inputInterestsDescription,
        cost: inputInterestsCost,
        review: inputInterestsReview
//      place:
      }
      
      // 3. Call the method(postNewinterests) with the fetch request to POST to the API and pass it the object we created in the previous step
      
      API.saveNewData("interests", newInterests)
        },
    }
  export default interestsForm