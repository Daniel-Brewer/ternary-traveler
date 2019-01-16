import API from "./api"
// This module will have the interest form to be filled out

import placesList from "./placesList"

const interestsForm = {

    // This module will build a form and append it to the DOM. The form will contain input fields for a user to add a new interests to their refrigerator and a button with an event listener that will listen for the click
    createAndAppendForm () {
      // 1. Build HTML form
      let formHeader = document.createElement("h3")
      let addInterestButton = document.createElement("button")
      formHeader.appendChild(addInterestButton);
      formHeader.textContent = "Add an interest"
      // EventListener for Button Click
      addInterestButton.addEventListener("click", this.addInterestToJSON);
  
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
  
      interestsReviewField.appendChild(interestsReviewLabel)
      interestsReviewField.appendChild(interestsReviewInput)
      

    //   let placesSelectField = document.createElement("select")
  
    //   let placesSelectLabel = document.createElement("option")
    //   placesSelectLabel.value = 
    //   placesSelectLabel.setAttribute("for", "interests__Cost")
    //   let placesSelectInput = document.createElement("input")
    //   placesSelectInput.setAttribute("id", "interests__Cost")
    //   placesSelectInput.setAttribute("name", "interests__Cost")
  
      placesSelectField.appendChild(placesSelectLabel)
      placesSelectField.appendChild(placesSelectInput)

      taskFormSection.appendChild(addTaskButton);
        addTaskButton.textContent = "Add Task";
        // EventListener for Button Click
        addTaskButton.addEventListener("click", this.addTaskToJSON);
  
      let submitButton = document.createElement("button")
      submitButton.textContent = "Add interests"
      submitButton.setAttribute("class", "interests__save")
  
      // 2. Attach event listener to button in form
      submitButton.addEventListener("click", this.handleAddNewInterests)
  
      // 3. Append the HTML form to the DOM
      //Notice that I have added an article element to my index.html with the class "form".
      let interestsFormFragment = document.createDocumentFragment()
      interestsFormFragment.appendChild(formHeader)
      interestsFormFragment.appendChild(interestsNameField)
      interestsFormFragment.appendChild(interestsDescriptionField)
      interestsFormFragment.appendChild(interestsCostField)
      interestsFormFragment.appendChild(interestsReviewField)
      interestsFormFragment.appendChild(submitButton)
  
      let formArticle = document.querySelector(".form")
      formArticle.appendChild(interestsFormFragment)
  
    },
    // This module will also contain the function that executes when the button in the form is clicked. When the button in the form is clicked, the following will happen:
    handleAddNewInterests (event) {
      // 1. Get user input that user entered
      let inputInterestsName = document.querySelector("#interests__name").value
      let inputInterestsDescription = document.querySelector("#interests__Description").value
      let inputInterestsCost = document.querySelector("#interests__Cost").value
      let inputInterestsReview = document.querySelector("#interests__Review").value
  
      // 2. Create a new object with the same structure we have been using throughout the application to represent a interests item:
      // {
        //   name: "user input name",
        //   Description: "user input Description",
        //   Cost: "user input Cost"
      // }
  
      let newInterests = {
        name: inputInterestsName,
        description: inputInterestsDescription,
        cost: inputInterestsCost,
        review: inputInterestsReview
      }
      
      // 3. Call the method(postNewinterests) with the fetch request to POST to the API and pass it the object we created in the previous step
      
      API.postNewData("interests", newInterests)

        },


        // .then(response => {
        //     placesList.interests();
        //   })

    }
  export default interestsForm