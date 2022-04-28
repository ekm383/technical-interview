let submitEl = document.querySelector(".submit");
let elements = document.querySelector(".form-control");

submitEl.addEventListener("click", (e) => {
  e.preventDefault();

  let myForm = document.getElementById("myForm");
  let formData = new FormData(myForm);

  console.log(formData);

  /*
   * Step 1. Append the elements name and its input value to the formData instance
   * Step 2. Loop through entries and console log the keys and values
   */

  // Code goes here
});
