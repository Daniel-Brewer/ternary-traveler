// This module will have the interest form to be filled out
// import interestsCollection from "./interestsCollection"
// import interestsList from "./interestsList"

const interestsForm = {

    // This module will build a form and append it to the DOM. The form will contain input fields for a user to add a new interests to their refrigerator and a button with an event listener that will listen for the click
    createAndAppendForm () {
      // 1. Build HTML form
      let formHeader = document.createElement("h3")
      formHeader.textContent = "Add a interest"
  
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
      

    //   let placesSelectField = document.createElement("select")
  
    //   let placesSelectLabel = document.createElement("option")
    //   placesSelectLabel.value = 
    //   placesSelectLabel.setAttribute("for", "interests__Cost")
    //   let placesSelectInput = document.createElement("input")
    //   placesSelectInput.setAttribute("id", "interests__Cost")
    //   placesSelectInput.setAttribute("name", "interests__Cost")
  
      placesSelectField.appendChild(placesSelectLabel)
      placesSelectField.appendChild(placesSelectInput)
  
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
      interestsFormFragment.appendChild(placesSelectField)
      interestsFormFragment.appendChild(submitButton)
  
      let formArticle = document.querySelector(".form")
      formArticle.appendChild(interestsFormFragment)
  
    },
    // This module will also contain the function that executes when the button in the form is clicked. When the button in the form is clicked, the following will happen:
    handleAddNewInterests (event) {
      // 1. Get user input that user entered
      let inputinterestsName = document.querySelector("#interests__name").value
      let inputinterestsDescription = document.querySelector("#interests__Description").value
      let inputinterestsCost = document.querySelector("#interests__Cost").value
  
      // 2. Create a new object with the same structure we have been using throughout the application to represent a interests item:
      // {
        //   name: "user input name",
        //   Description: "user input Description",
        //   Cost: "user input Cost"
      // }
  
      let newinterests = {
        name: inputinterestsName,
        Description: inputinterestsDescription,
        Cost: inputinterestsCost
      }
  
      // 3. Call the method(postNewinterests) with the fetch request to POST to the API and pass it the object we created in the previous step
  
      // Notice the import statement at the top of the module so I can call a method in the interestsCollection module.
  
      // *****IMPORTANT*****
      // You will notice at this point that while a new interests item is being added to our API, unless you refresh the application, the newly added item will not show up on the DOM. We definitely do not want our user to have to hit refresh every time they add new interests to their refrigerator.
  
      // We also do NOT want to manually add our new interests item to the list of interests on the DOM. Instead, we want our data to be our point of truth. Our DOM should always use the data from our API to render the DOM. Logically, here are the steps we want to take place.
      // 1. Add new interests item to the API using a POST HTTP request.
      //     We are already doing this. We are using the fetch defined in the interestsCollection module to add a new interests item to the API.
      // 2. After the new item has been added, we want to get a list of all the interests items (using a GET HTTP request) and render them to the DOM.
            // Because we want to make sure we only do this after the first step is done, we will return the fetch call that is doing the POST and chain a .then to the call (just like we do with the GET). This means we are doing the POST and then waiting until a response comes back before doing this step. The reason we want to wait is because we want to be sure that when we ask our API for the list of interests items, the newly added item is on that list. So we wait until it has been added before using a GET request to get a list of all interests items and rendering them to the DOM.         
            // But that sounds awfully familiar: make a GET HTTP request to the API for a list of all interests items, iterate over that list and build the HTML for each item, append the HTML to the DOM. This is exactly what our fridgify method in our interestsList module is already doing. Which means I can simply call that method from here. Once again, note that I am importing the appropriate module at the top of this file.
      // To summarize, we are adding a new item to the API, then getting an updated list of items from the API and rerendering the DOM.
      // *******************
      interestsCollection.postNewinterests(newinterests)
      .then(response => {
        interestsList.fridgify()
      })
    }
  }
  
  export default interestsForm