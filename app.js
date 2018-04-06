const linkCategory     = document.querySelector("#linkCategory"); 
const submitButton     = document.querySelector("#submitButton");
const addBtn           = document.querySelector("#addBtn");
const cancelButton     = document.querySelector("#cancelButton");
const addLinkPanel     = document.querySelector("#addLinkPanel");
const linksList        = document.querySelector("#linksList");
const addedCategories  = document.querySelector("#addedCategories");
const addLinkContainer = document.querySelector("#addLinkContainer");

let linkCategories = [];

let editIndex = -1;

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
  addLinkContainer.classList.remove('hidden');
  displayLinkCategories();
}

function hideFormPanel() {
  addLinkContainer.classList.add('hidden');
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

  if(editIndex === -1) {
    // Push all information into front of array
    links.unshift(newLink);
  } else {
    links[editIndex] = newLink;
    editIndex = -1;
  }

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
    `<div class="flex-item">
      <div class="link panel">

        <div class="link-options">
            <button class="btn-sm" onclick="deleteLink(${index})">Delete</button>
            <button class="btn-sm" onclick="editLink(${index})">Edit</button>
        </div>

        <a href="${link.url}">
          <h1 class="header">${link.title}</h1>
        </a>

        <p class="link-date">${formattedDate()}</p>

        <div class="categories">
          Categories:`
          for(let category of link.categories) {
            linkHTMLString += `<span class="category">${category}</span> \n`
          }

          linkHTMLString +=
        `</div>
      </div>
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

  editIndex = index;
  linkTitle.value = links[index].title;
  linkUrl.value = links[index].url;
  linkCategories = links[index].categories;

  showFormPanel();

}

function formattedDate(d = new Date) {
  let month = String(d.getMonth() + 1);
  let day = String(d.getDate());
  const year = String(d.getFullYear());

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return `${month}/${day}/${year}`;
}