import API from "./api"
import builtInterest from "./builtInterest"
// This module will provide the interestsList to be displayed 

// An empty document fragment

let interestDocFragment = document.createDocumentFragment()
const interestsList = {
    
    getInterests() {

        // fetch all interests
        API.getData("interests")
            .then(allinterests => {
                // Loop through interests to obtain the interest id, name, description, cost, review,and interestsId data
                allinterests.forEach(interest => {
                    builtInterest.interestBuilder(interest)

                    // interestDocFragment.appendChild(interestHtml)
                })
            })
        // 3. Append the HTML to the DOM            
        // let outputArticle = document.querySelector(".output__interests")
        // outputArticle.appendChild(interestDocFragment)
    }
}
export default interestsList