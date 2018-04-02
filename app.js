const linkCategory = document.querySelector("#linkCategory"); 

let linkCategories = [];

console.log(linkCategory);

linkCategory.addEventListener("keydown", function(event) {
  if(event.keyCode === 188) {
    event.preventDefault(); // prevents the comma from appearing
    linkCategories.push(linkCategory.value); // push value to array 
    linkCategory.value = ""; // Clears the form

    // Display the updated categories
    displayLinkCategories();
  }
});

