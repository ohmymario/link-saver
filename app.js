const linkCategory    = document.querySelector("#linkCategory"); 
const submitButton    = document.querySelector("#submitButton");
const addBtn          = document.querySelector("#addBtn");
const cancelButton    = document.querySelector("#cancelButton");
const addLinkPanel    = document.querySelector("#addLinkPanel");
const linksList       = document.querySelector("#linksList");
const addedCategories = document.querySelector("#addedCategories");

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
  clearLinkForm()
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
  addedCategories.innerHTML = '';
  for(let category of linkCategories) {
    var categoryHTMLString = `<span class="category">${category}</span> \n`
    addedCategories.innerHTML += categoryHTMLString;
  }
}

// Clear Form and Reset Categories
function clearLinkForm() {
  linkTitle.value = '';
  linkUrl.value = '';
  linkCategory.value = '';
  linkCategories = [];
  addedCategories.innerHTML = '';
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

  // Push all information into front of array
  links.unshift(newLink);

  clearLinkForm();
  
  displayLinkCategories();

  //Hide Form Panel
  hideFormPanel();

  // Generate HTML with new user input
  displayLinks();
  
});

function displayLinks() {
  linksList.innerHTML = '';

  let index = 0;
  for(let link of links) {
   
    let linkHTMLString = 
    `<div class="link panel">

      <div class="link-options">
          <button class="btn-sm" onclick="deleteLink(${index})">Delete</button>
          <button class="btn-sm" onclick="editLink(${index})">Edit</button>
      </div>

      <a href="${link.url}">
        <h1 class="header">${link.title}</h1>
      </a>

      <p class="link-date">${Date.now()}</p>

      <div class="categories">
        Categories:`
        for(let category of link.categories) {
          linkHTMLString += `<span class="category">${category}</span> \n`
        }

        linkHTMLString +=
      `</div>

    </div>`;

    linksList.innerHTML += linkHTMLString;
    index++;
  }
}

function deleteLink(index) {
  console.log(`Deleting link at index ${index}`);
  links.splice(index, 1); // (Where on the array to remove, How many items)
  console.log(links);
  displayLinks(); // Recreate Links HTML
}

function editLink(index) {
  console.log(`Editing link at index ${index}`);
}