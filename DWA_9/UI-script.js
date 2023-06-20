/**
 * An object literal that contains references to all the HTML elements
 * referenced through the operation of the app either upon initialisation or
 * while its running (via event listeners). This ensure that all UI elements can
 * be accessed and seen in a structured manner in a single data structure.
 */

export const domElements = {
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
    export const createPreview = (id, image, title, authors) => {
        const element = document.createElement('book-preview');
        element.setAttribute('data-preview', id);

    element.innerHTML = `
            <img slot = 'bookImage' 
            class="preview__image"
                src="${image}"
            />
                <h3 slot ="bookTitle">${title}</h3>
                <div slot ="bookAuthor">${authors}</div>
        `;
        

        return element
    }
