const getButtonEl = document.querySelector(".get-button");
const outputEl = document.querySelector(".output-container");

getButtonEl.addEventListener("click", getUserData);

let userData;

function getUserData() {
  let xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      /**
       * Step 1. Get the reponse
       * Step 2. Parse the responseText
       * Step 3. Send the parsed obj to displayUsers
       */
      // Code goes here
    }
  };

  xmlHttp.open("GET", "https://reqres.in/api/users?page=2");
  xmlHttp.send();
}

function displayUsers(dataObj) {
  /**
   * Step 4. Destructure data off the dataObj
   *
   * Step 5. With the new data array,
   * map through the array and the keys
   * to the innerHTML of .output-container
   */
  // Code goes here
}
