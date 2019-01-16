(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// This module makes the fetch calls
// getData fetches the resource that is passed as a parameter using the "POST" method
const API = {
  getData(resource) {
    return fetch(`http://localhost:8088/${resource}`).then(response => response.json());
  },

  getPayloadData(resource, payload) {
    return fetch(`http://localhost:8088/${resource}/${payload}`).then(response => response.json());
  },

  postNewData(resource, payload) {
    return fetch(`http://localhost:8088/${resource}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
  }

};
var _default = API; // saveInterest saves new point of interest to database resource "interests" using the "POST" method
// editData edits the parameter passed (cost and review) to current point of interest using "PUT"method
// deleteInterest deletes the point of interest whose id is passed passed as a parameter using the "DELETE" method

exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

var _placesList = _interopRequireDefault(require("./placesList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This module will run the application by calling the necessary functions
_placesList.default.getPlacesList();

},{"./placesList":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _api = _interopRequireDefault(require("./api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This module will provide the placesList to be displayed 
const interests = {
  // This HTML is then returned to the point from where this method was called
  interestBuilder(interestObject) {
    let interestArticle = document.createElement("article");
    interestArticle.setAttribute("id", `interest--${interestObject.id}`);
    let interestName = document.createElement("h3");
    interestName.textContent = interestObject.name;
    let interestDescription = document.createElement("p");
    interestDescription.textContent = interestObject.description;
    let interestCost = document.createElement("p");
    interestCost.textContent = interestObject.cost;
    let editinterestButton = document.createElement("button");
    editinterestButton.textContent = "Edit";
    editinterestButton.addEventListener("click", () => {
      let articleId = event.target.parentNode.id; // research this line more

      let interestId = articleId.split("--")[1];
      interestCollection.getinterest(interestId).then(response => {
        interestEditForm.createAndAppendForm(articleId, response);
      });
    });
    let deleteinterestButton = document.createElement("button");
    deleteinterestButton.textContent = "Delete";
    deleteinterestButton.addEventListener("click", () => {
      let interestId = event.target.parentNode.id.split("--")[1];
      interestCollection.deleteinterest(interestId).then(response => {
        interestsList.getinterest(response);
      });
    });
    interestArticle.appendChild(interestName);
    interestArticle.appendChild(interestDescription);
    interestArticle.appendChild(interestCost);
    interestArticle.appendChild(editinterestButton);
    interestArticle.appendChild(deleteinterestButton);
    return interestArticle;
  }

};
const placesList = {
  getPlacesList() {
    // An empty document fragment
    let placeDocFragment = document.createDocumentFragment(); // 1. Get data
    // The getData method will do a fetch and return a promise. This call will return the data from the API in the response.

    _api.default.getData("places").then(allPlaces => {
      allPlaces.forEach(place => {
        // console.log("place",place)
        // fetch all interests
        _api.default.getData("interests").then(allinterests => {
          // Loop through interests to obtain the interest name,description,cost, and review data
          allinterests.forEach(interest => {
            if (interest.placeId === place.id) {
              let interestHtml = interests.interestBuilder(interest); //   console.log("interestHtml", interestHtml)
              // console.log(interest)

              placeDocFragment.appendChild(interestHtml);
              console.log("placeDocFragment", placeDocFragment);
            }
          }); // 3. Append the HTML to the DOM            

          let outputArticle = document.querySelector(".output__places");
          outputArticle.appendChild(placeDocFragment);
        });
      });
    });
  }

};
var _default = placesList;
exports.default = _default;

},{"./api":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2FwaS5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyIsIi4uL3NjcmlwdHMvcGxhY2VzTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBO0FBRUE7QUFDQSxNQUFNLEdBQUcsR0FBRztBQUVSLEVBQUEsT0FBTyxDQUFDLFFBQUQsRUFBVztBQUNkLFdBQU8sS0FBSyxDQUFFLHlCQUF3QixRQUFTLEVBQW5DLENBQUwsQ0FDTixJQURNLENBQ0QsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBRFgsQ0FBUDtBQUVILEdBTE87O0FBTVIsRUFBQSxjQUFjLENBQUMsUUFBRCxFQUFXLE9BQVgsRUFBb0I7QUFDOUIsV0FBTyxLQUFLLENBQUUseUJBQXdCLFFBQVMsSUFBRyxPQUFRLEVBQTlDLENBQUwsQ0FDTixJQURNLENBQ0QsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBRFgsQ0FBUDtBQUVILEdBVE87O0FBVVIsRUFBQSxXQUFXLENBQUMsUUFBRCxFQUFVLE9BQVYsRUFBbUI7QUFDMUIsV0FBTyxLQUFLLENBQUUseUJBQXdCLFFBQVMsRUFBbkMsRUFBc0M7QUFDaEQsTUFBQSxNQUFNLEVBQUUsTUFEd0M7QUFFaEQsTUFBQSxPQUFPLEVBQUU7QUFDTCx3QkFBZ0I7QUFEWCxPQUZ1QztBQUtoRCxNQUFBLElBQUksRUFBRSxJQUFJLENBQUMsU0FBTCxDQUFlLE9BQWY7QUFMMEMsS0FBdEMsQ0FBWjtBQVFQOztBQW5CVyxDQUFaO2VBcUJlLEcsRUFDZjtBQUVBO0FBRUE7Ozs7Ozs7QUM3QkE7Ozs7QUFDQTtBQUNBLG9CQUFXLGFBQVg7Ozs7Ozs7Ozs7QUNGQTs7OztBQUNBO0FBQ0EsTUFBTSxTQUFTLEdBQUc7QUFFZDtBQUNBLEVBQUEsZUFBZSxDQUFDLGNBQUQsRUFBaUI7QUFDOUIsUUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FB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QyxlQUFWLENBQTBCLFFBQTFCLENBQW5CLENBRGdDLENBRWxDO0FBQ0E7O0FBQ0EsY0FBQSxnQkFBZ0IsQ0FBQyxXQUFqQixDQUE2QixZQUE3QjtBQUNBLGNBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxrQkFBWixFQUFnQyxnQkFBaEM7QUFDQztBQUNKLFdBUkQsRUFGa0IsQ0FXbEI7O0FBQ0EsY0FBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXBCO0FBQ0EsVUFBQSxhQUFhLENBQUMsV0FBZCxDQUEwQixnQkFBMUI7QUFDSCxTQWZMO0FBaUJDLE9BcEJMO0FBcUJILEtBdkJMO0FBd0JDOztBQWhDVSxDQUFuQjtlQWtDZSxVIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gVGhpcyBtb2R1bGUgbWFrZXMgdGhlIGZldGNoIGNhbGxzXHJcblxyXG4vLyBnZXREYXRhIGZldGNoZXMgdGhlIHJlc291cmNlIHRoYXQgaXMgcGFzc2VkIGFzIGEgcGFyYW1ldGVyIHVzaW5nIHRoZSBcIlBPU1RcIiBtZXRob2RcclxuY29uc3QgQVBJID0ge1xyXG5cclxuICAgIGdldERhdGEocmVzb3VyY2UpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC8ke3Jlc291cmNlfWApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgfSxcclxuICAgIGdldFBheWxvYWREYXRhKHJlc291cmNlLCBwYXlsb2FkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtyZXNvdXJjZX0vJHtwYXlsb2FkfWApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgfSxcclxuICAgIHBvc3ROZXdEYXRhKHJlc291cmNlLHBheWxvYWQpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC8ke3Jlc291cmNlfWAsIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKVxyXG4gICAgICAgIH0pXHJcblxyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQVBJXHJcbi8vIHNhdmVJbnRlcmVzdCBzYXZlcyBuZXcgcG9pbnQgb2YgaW50ZXJlc3QgdG8gZGF0YWJhc2UgcmVzb3VyY2UgXCJpbnRlcmVzdHNcIiB1c2luZyB0aGUgXCJQT1NUXCIgbWV0aG9kXHJcblxyXG4vLyBlZGl0RGF0YSBlZGl0cyB0aGUgcGFyYW1ldGVyIHBhc3NlZCAoY29zdCBhbmQgcmV2aWV3KSB0byBjdXJyZW50IHBvaW50IG9mIGludGVyZXN0IHVzaW5nIFwiUFVUXCJtZXRob2RcclxuXHJcbi8vIGRlbGV0ZUludGVyZXN0IGRlbGV0ZXMgdGhlIHBvaW50IG9mIGludGVyZXN0IHdob3NlIGlkIGlzIHBhc3NlZCBwYXNzZWQgYXMgYSBwYXJhbWV0ZXIgdXNpbmcgdGhlIFwiREVMRVRFXCIgbWV0aG9kXHJcbiIsImltcG9ydCBwbGFjZXNMaXN0IGZyb20gXCIuL3BsYWNlc0xpc3RcIlxyXG4vLyBUaGlzIG1vZHVsZSB3aWxsIHJ1biB0aGUgYXBwbGljYXRpb24gYnkgY2FsbGluZyB0aGUgbmVjZXNzYXJ5IGZ1bmN0aW9uc1xyXG5wbGFjZXNMaXN0LmdldFBsYWNlc0xpc3QoKSIsImltcG9ydCBBUEkgZnJvbSBcIi4vYXBpXCJcclxuLy8gVGhpcyBtb2R1bGUgd2lsbCBwcm92aWRlIHRoZSBwbGFjZXNMaXN0IHRvIGJlIGRpc3BsYXllZCBcclxuY29uc3QgaW50ZXJlc3RzID0ge1xyXG5cclxuICAgIC8vIFRoaXMgSFRNTCBpcyB0aGVuIHJldHVybmVkIHRvIHRoZSBwb2ludCBmcm9tIHdoZXJlIHRoaXMgbWV0aG9kIHdhcyBjYWxsZWRcclxuICAgIGludGVyZXN0QnVpbGRlcihpbnRlcmVzdE9iamVjdCkge1xyXG4gICAgICBsZXQgaW50ZXJlc3RBcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIilcclxuICBcclxuICAgICAgaW50ZXJlc3RBcnRpY2xlLnNldEF0dHJpYnV0ZShcImlkXCIsIGBpbnRlcmVzdC0tJHtpbnRlcmVzdE9iamVjdC5pZH1gKVxyXG4gIFxyXG4gICAgICBsZXQgaW50ZXJlc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXHJcbiAgICAgIGludGVyZXN0TmFtZS50ZXh0Q29udGVudCA9IGludGVyZXN0T2JqZWN0Lm5hbWVcclxuICAgICAgbGV0IGludGVyZXN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgICBpbnRlcmVzdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaW50ZXJlc3RPYmplY3QuZGVzY3JpcHRpb25cclxuICAgICAgbGV0IGludGVyZXN0Q29zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICAgIGludGVyZXN0Q29zdC50ZXh0Q29udGVudCA9IGludGVyZXN0T2JqZWN0LmNvc3RcclxuICBcclxuICBcclxuICBcclxuICAgICAgbGV0IGVkaXRpbnRlcmVzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgICAgZWRpdGludGVyZXN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJFZGl0XCJcclxuICAgICAgZWRpdGludGVyZXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGFydGljbGVJZCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmlkXHJcbiAgICAgICAgLy8gcmVzZWFyY2ggdGhpcyBsaW5lIG1vcmVcclxuICAgICAgICBsZXQgaW50ZXJlc3RJZCA9IGFydGljbGVJZC5zcGxpdChcIi0tXCIpWzFdXHJcbiAgICAgICAgaW50ZXJlc3RDb2xsZWN0aW9uLmdldGludGVyZXN0KGludGVyZXN0SWQpXHJcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGludGVyZXN0RWRpdEZvcm0uY3JlYXRlQW5kQXBwZW5kRm9ybShhcnRpY2xlSWQsIHJlc3BvbnNlKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfSlcclxuICBcclxuICBcclxuICAgICAgbGV0IGRlbGV0ZWludGVyZXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgICBkZWxldGVpbnRlcmVzdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCJcclxuICAgICAgZGVsZXRlaW50ZXJlc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBsZXQgaW50ZXJlc3RJZCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmlkLnNwbGl0KFwiLS1cIilbMV1cclxuICAgICAgICBpbnRlcmVzdENvbGxlY3Rpb24uZGVsZXRlaW50ZXJlc3QoaW50ZXJlc3RJZClcclxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaW50ZXJlc3RzTGlzdC5nZXRpbnRlcmVzdChyZXNwb25zZSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgXHJcbiAgICAgIGludGVyZXN0QXJ0aWNsZS5hcHBlbmRDaGlsZChpbnRlcmVzdE5hbWUpXHJcbiAgICAgIGludGVyZXN0QXJ0aWNsZS5hcHBlbmRDaGlsZChpbnRlcmVzdERlc2NyaXB0aW9uKVxyXG4gICAgICBpbnRlcmVzdEFydGljbGUuYXBwZW5kQ2hpbGQoaW50ZXJlc3RDb3N0KVxyXG4gICAgICBpbnRlcmVzdEFydGljbGUuYXBwZW5kQ2hpbGQoZWRpdGludGVyZXN0QnV0dG9uKVxyXG4gICAgICBpbnRlcmVzdEFydGljbGUuYXBwZW5kQ2hpbGQoZGVsZXRlaW50ZXJlc3RCdXR0b24pXHJcbiAgXHJcbiAgICAgIHJldHVybiBpbnRlcmVzdEFydGljbGVcclxuICAgIH1cclxuICB9XHJcbmNvbnN0IHBsYWNlc0xpc3QgPSB7XHJcblxyXG4gICAgZ2V0UGxhY2VzTGlzdCgpIHtcclxuICAgICAgICAvLyBBbiBlbXB0eSBkb2N1bWVudCBmcmFnbWVudFxyXG4gICAgICAgIGxldCBwbGFjZURvY0ZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXHJcblxyXG4gICAgICAgIC8vIDEuIEdldCBkYXRhXHJcbiAgICAgICAgLy8gVGhlIGdldERhdGEgbWV0aG9kIHdpbGwgZG8gYSBmZXRjaCBhbmQgcmV0dXJuIGEgcHJvbWlzZS4gVGhpcyBjYWxsIHdpbGwgcmV0dXJuIHRoZSBkYXRhIGZyb20gdGhlIEFQSSBpbiB0aGUgcmVzcG9uc2UuXHJcbiAgICAgICAgQVBJLmdldERhdGEoXCJwbGFjZXNcIilcclxuICAgICAgICAgICAgLnRoZW4oYWxsUGxhY2VzID0+IHtcclxuICAgICAgICAgICAgICAgIGFsbFBsYWNlcy5mb3JFYWNoKHBsYWNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBsYWNlXCIscGxhY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZmV0Y2ggYWxsIGludGVyZXN0c1xyXG4gICAgICAgICAgICAgICAgICAgIEFQSS5nZXREYXRhKFwiaW50ZXJlc3RzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGFsbGludGVyZXN0cyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggaW50ZXJlc3RzIHRvIG9idGFpbiB0aGUgaW50ZXJlc3QgbmFtZSxkZXNjcmlwdGlvbixjb3N0LCBhbmQgcmV2aWV3IGRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbGludGVyZXN0cy5mb3JFYWNoKGludGVyZXN0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpbnRlcmVzdC5wbGFjZUlkID09PSBwbGFjZS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGludGVyZXN0SHRtbCA9IGludGVyZXN0cy5pbnRlcmVzdEJ1aWxkZXIoaW50ZXJlc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcImludGVyZXN0SHRtbFwiLCBpbnRlcmVzdEh0bWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaW50ZXJlc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VEb2NGcmFnbWVudC5hcHBlbmRDaGlsZChpbnRlcmVzdEh0bWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwbGFjZURvY0ZyYWdtZW50XCIsIHBsYWNlRG9jRnJhZ21lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDMuIEFwcGVuZCB0aGUgSFRNTCB0byB0aGUgRE9NICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3V0cHV0QXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0X19wbGFjZXNcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dEFydGljbGUuYXBwZW5kQ2hpbGQocGxhY2VEb2NGcmFnbWVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ICBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBwbGFjZXNMaXN0Il19