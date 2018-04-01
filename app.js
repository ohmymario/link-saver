var linkCategory = document.querySelector("#linkCategory");

console.log(linkCategory);

linkCategory.addEventListener("keydown", function(event) {
  if(event.keyCode === 188) {
    console.log("Comma Was Pressed");
    console.log(linkCategory.value);
  }
});