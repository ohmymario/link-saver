const linkCategory = document.querySelector("#linkCategory"); 
const submitButton = document.querySelector("#submitButton");
const addBtn       = document.querySelector("#addBtn");
const cancelButton = document.querySelector("#cancelButton");
const addLinkPanel = document.querySelector("#addLinkPanel");

let linkCategories = [];

// Test Content
let links          = [
  {
    title: 'New Link 1',
    url: 'url.com1',
    categories: ['node', 'bulma']      
  },
  {
    title: 'New Link 2',
    url: 'url.com2',
    categories: ['node', 'angular']    
  },
  {
    title: 'New Link 3',
    url: 'url.com3',
    categories: ['node', 'bootstrap']    
  }
];

displayLinks();

addBtn.addEventListener("click", (event) => {
  // event.preventDefault(); 
  console.log("addBtn");
  showFormPanel();
});

cancelButton.addEventListener("click", (event) => {
  event.preventDefault(); 
  console.log("cancelButton")
  hideFormPanel();
});

// Hide / Show Form Function - Reusable
function showFormPanel() {
  addLinkPanel.classList.remove('hidden');
}

function hideFormPanel() {
  addLinkPanel.classList.add('hidden');
}

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

  //Hide Form Panel
  hideFormPanel();
  
});

function displayLinks() {

}