const linkCategory = document.querySelector("#linkCategory"); 
const submitButton = document.querySelector("#submitButton");

let linkCategories = [];
let links = [];

linkCategory.addEventListener("keydown", function(event) {
  if(event.keyCode === 188) {
    event.preventDefault(); // Prevents the comma from appearing
    linkCategories.push(linkCategory.value); // Push value to array 
    linkCategory.value = ""; // Clears the form

    // Display the updated categories
    displayLinkCategories();
  }
});

function displayLinkCategories() {
  console.log("Displaying Link Categories");
}

submitButton.addEventListener("click", function(event) {

  // Stop Submit Action
  event.preventDefault(); 

  // Obtain form values
  const title = linkTitle.value;
  const url = linkUrl.value;

  // Array of categories sep by comma
  const categories = linkCategories;

  // Obj with User inputted values
  const newLink = {title,url,categories}

  console.log(newLink);

  // Push all information into array
  links.push(newLink);

  // Clear Form and Reset Categories
  linkTitle.value = '';
  linkUrl.value = '';
  linkCategory.value = '';
  linkCategories = [];

  displayLinkCategories();
  
});