// Fully working scripts.js file

import { 
    books, 
    authors, 
    genres, 
    BOOKS_PER_PAGE 

} from './data.js';

let page = 1;
let matches = books;

const domElements = {
    search:{
        searchForm : document.querySelector('[data-search-form]'),
        searchOverlay : document.querySelector('[data-search-overlay]'),
        searchCancel : document.querySelector('[data-search-cancel]'),
        searchTitleInput : document.querySelector('[data-search-title]'),
        searchGenresSelect : document.querySelector('[data-search-genres]'),
        searchAuthorsSelect : document.querySelector('[data-search-authors]')
    },
    list:{ 
        listItemsContainer : document.querySelector('[data-list-items]'),
        listButton : document.querySelector('[data-list-button]'),
        listMessage : document.querySelector('[data-list-message]'),
        listCloseButton : document.querySelector('[data-list-close]'),
        listActiveOverlay : document.querySelector('[data-list-active]')
    },
    settings:{
        settingsForm : document.querySelector('[data-settings-form]'),
        settingsOverlay : document.querySelector('[data-settings-overlay]'),
        settingsCancel : document.querySelector('[data-settings-cancel]'),
        settingsThemeSelect : document.querySelector('[data-settings-theme]')
    },
};

/**
 * This creates a preview element for a book 
 * @param {string} id - The Book's unique identifier. 
 * @param {string} image - A link to the Book's preview image. 
 * @param {string} title - The book's title.
 * @param {string} authors - The name of the book's author.
 * @return {HTMLElement} The preview element for the book.
 */
const createPreview = (id, image, title, authors) => {
    const element = document.createElement('button');
    element.classList = 'preview';
    element.setAttribute('data-preview', id);

  element.innerHTML = `
        <img
            class="preview__image"
            src="${image}"
        />
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors}</div>
        </div>
    `;
    return element
}

/**  
 * Apply the book previews to the initial page.
*/
const initializePreviews = () => {
    const startingFragment = document.createDocumentFragment();
    
    for (const {author, id, image, title} of books.slice(0,BOOKS_PER_PAGE)){
        const authorName = authors[author];
        const previewElement = createPreview(id, image, title, authorName );
        startingFragment.appendChild (previewElement);
    }

    domElements.list.listItemsContainer.appendChild(startingFragment);
};

// Update the book previews based on search filters 
const updatePreviews = () => {
    const formData = new FormData(domElements.search.searchForm)
    const filters = Object.fromEntries(formData)
    const filteredBooks = []

    for (const book of books){
        const genreMatch = filters.genre === 'any' || book.genres.includes(filters.genre)

        if (
            (filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLocaleLowerCase())) &&
            (filters.author === 'any' || book.author === filters.author) && 
            genreMatch
        ) {
            filteredBooks.push(book)
        }
    }

    page = 1;
    matches = filteredBooks;

    if (filteredBooks.length < 1) {
        domElements.list.listMessage.classList.add('list__message_show')
    } else {
        domElements.list.listMessage.classList.remove('list__message_show')
    }

    domElements.list.listItemsContainer.innerHTML = '';
    const newItemsFragment = document.createDocumentFragment();

    for (const { author, id, image, title } of filteredBooks.slice(0, BOOKS_PER_PAGE)) {
        const authorName = authors[author];
        const previewElement = createPreview(id, image, title, authorName);
        newItemsFragment.appendChild(previewElement);
      }
    
      domElements.list.listItemsContainer.appendChild(newItemsFragment);
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
  
    domElements.list.listButton.innerText = `Show more (${books.length - BOOKS_PER_PAGE})`;
    domElements.list.listButton.disabled = (matches.length - (page * BOOKS_PER_PAGE)) < 0;
  
    domElements.list.listButton.innerHTML = `
      <span>Show more</span>
      <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
    `;
  }); 
  
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
  
    for (const { author, id, image, title } of matches.slice(page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE)) {
      const element = createPreview(id, image, title, authors[author]);
      fragment.appendChild(element);
    }
  
    document.querySelector('[data-list-items]').appendChild(fragment);
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
  
  
  
  
  
  
