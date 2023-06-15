// Fully working scripts.js file

import { 
    books, 
    authors, 
    genres, 
    BOOKS_PER_PAGE,
    filterBooks,
    getFilterData

} from './data.js';

import {
    createPreview,
    domElements,

} from './UI-script.js';

let page = 1;
let matches = books.slice(0,BOOKS_PER_PAGE);


/**
 * This is a function that creates collects the data needed to create a preview Html
 * This function basically loops through the books object and collects the data according to the process 
 * It then continues to use the {@link createPreview()} to create book preview elements\
 * @returns {HTMLElement} 
 */
const createBookHtml = () => {
    
    const startingFragment = document.createDocumentFragment();
    for (const {author, id, image, title} of matches){
        const authorName = authors[author];
        const previewElement = createPreview(id, image, title, authorName );
        startingFragment.appendChild (previewElement);
    }
    return startingFragment;
};

// Apply the book previews to the initial page.
const initializePreviews = () => {
    domElements.list.listItemsContainer.appendChild(createBookHtml());
};

// Update the book previews based on search filters 
const updatePreviews = () => {
     
    
 //filtering our Books according to the search result 
 const filteredBooks = filterBooks(getFilterData())

  

//Update the view port with the new filtered list 
    page = 1;
    matches = filteredBooks.slice(0, BOOKS_PER_PAGE);


    domElements.list.listItemsContainer.innerHTML = ''
 
      domElements.list.listItemsContainer.appendChild(createBookHtml());
      domElements.list.listButton.disabled = (filteredBooks.length - (page * BOOKS_PER_PAGE)) < 1;
    
      domElements.list.listButton.innerHTML = `
        <span>Show more</span>
        <span class="list__remaining"> (${(filteredBooks.length - (page * BOOKS_PER_PAGE)) > 0 ? (filteredBooks.length - (page * BOOKS_PER_PAGE)) : 0})</span>
      `;
    };


// Handle form submission for search 
domElements.search.searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    updatePreviews();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    domElements.search.searchOverlay.open = false;
}); 

// Handle search form cancellation
domElements.search.searchCancel.addEventListener('click', () => {
    domElements.search.searchOverlay.open = false;
  });

// Handle settings form submission
domElements.settings.settingsForm.addEventListener('submit', (event) => {
    event.preventDefault();
  const formData = new FormData(event.target);
  const { theme } = Object.fromEntries(formData);

  if (theme === 'night') {
    document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
    document.documentElement.style.setProperty('--color-light', '10, 10, 20');
  } else {
    document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
    document.documentElement.style.setProperty('--color-light', '255, 255, 255');
  }

  domElements.settings.settingsOverlay.open = false;
});

// Handle settings form cancellation
domElements.settings.settingsCancel.addEventListener('click', () => {
    domElements.settings.settingsOverlay.open = false;
  });


// Toggle search overlay visibility
document.querySelector('[data-header-search]').addEventListener('click', () => {
    domElements.search.searchOverlay.open = true;
    domElements.search.searchTitleInput.focus();
  });
  
  // Toggle settings overlay visibility
  document.querySelector('[data-header-settings]').addEventListener('click', () => {
    domElements.settings.settingsOverlay.open = true;
  });

// Load book previews on page load
document.addEventListener('DOMContentLoaded', () => {
    initializePreviews();
  
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      domElements.settings.settingsThemeSelect.value = 'night';
      document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
      document.documentElement.style.setProperty('--color-light', '10, 10, 20');
    } else {
      domElements.settingssettingsThemeSelect.value = 'day';
      document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
      document.documentElement.style.setProperty('--color-light', '255, 255, 255');
    }
  
    ;
    domElements.list.listButton.disabled = (matches.length - (page * BOOKS_PER_PAGE)) < 0;
    
    
    domElements.list.listButton.innerHTML = `
      <span>Show more</span>
      <span class="list__remaining" data-list-remaining>(${(matches.length - (page * BOOKS_PER_PAGE))})</span>
    `;
  }); 

const createOptions = (categorie, ) => {

}
  
  // Load genres into search form
const genreOptionsFragment = document.createDocumentFragment();
const firstGenreOption = document.createElement('option');
firstGenreOption.value = 'any';
firstGenreOption.innerText = 'All Genres';
genreOptionsFragment.appendChild(firstGenreOption);

for (const [id, name] of Object.entries(genres)) {
  const genreOption = document.createElement('option');
  genreOption.value = id;
  genreOption.innerText = name;
  genreOptionsFragment.appendChild(genreOption);
}

domElements.search.searchGenresSelect.appendChild(genreOptionsFragment);

// Load authors into search form
const authorOptionsFragment = document.createDocumentFragment();
const firstAuthorOption = document.createElement('option');
firstAuthorOption.value = 'any';
firstAuthorOption.innerText = 'All Authors';
authorOptionsFragment.appendChild(firstAuthorOption);

for (const [id, name] of Object.entries(authors)) {
  const authorOption = document.createElement('option');
  authorOption.value = id;
  authorOption.innerText = name;
  authorOptionsFragment.appendChild(authorOption);
}

domElements.search.searchAuthorsSelect.appendChild(authorOptionsFragment);

// Load more books on "Show more" button click.
domElements.list.listButton.addEventListener('click', () => {
    const fragment = document.createDocumentFragment();

    matches = books.slice(page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE)
    
    const booksNotShoewing = (matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0
    document.querySelector('[data-list-remaining]').innerText = booksNotShoewing
    document.querySelector('[data-list-items]').appendChild(createBookHtml());
    page += 1;
  });

 // Show active book details on preview click
domElements.list.listItemsContainer.addEventListener('click', (event) => {
    const previewButton = event.target.closest('.preview');
  
    if (previewButton) {
      const activeBookId = previewButton.getAttribute('data-preview');
      const activeBook = books.find((book) => book.id === activeBookId);
  
      if (activeBook) {
        document.querySelector('[data-list-active]').open = true;
        document.querySelector('[data-list-blur]').src = activeBook.image;
        document.querySelector('[data-list-image]').src = activeBook.image;
        document.querySelector('[data-list-title]').innerText = activeBook.title;
        document.querySelector('[data-list-subtitle]').innerText = `${authors[activeBook.author]} (${new Date(activeBook.published).getFullYear()})`;
        document.querySelector('[data-list-description]').innerText = activeBook.description;
      }
    }
  });
  
  // Toggle list overlay visibility
  domElements.list.listCloseButton.addEventListener('click', () => {
    domElements.list.listActiveOverlay.open= false;
  });
  

  
  
  
  
