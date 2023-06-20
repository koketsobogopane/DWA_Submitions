import { books, authors } from "../data.js";

const template = document.createElement('template');
const element = document.createElement('button');
element.classList = 'preview';
element.setAttribute('data-preview', "default id");

template.innerHTML = `
<style>
* {
    box-sizing: border-box
}

:root {
    --color-blue: 0, 150, 255;
    --color-force-dark: 10, 10, 20;
    --color-force-light: 255, 255, 255;
    --color-dark: 10, 10, 20;
    --color-light: 255, 255, 255;
}
.preview {
    border-width: 0;
    width: 100%;
    font-family: Roboto, sans-serif;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-align: left;
    border-radius: 8px;
    border: 1px solid rgba(var(--color-dark), 0.15);
    background: rgba(var(--color-light), 1);
  }
  
  @media (min-width: 60rem) {
    .preview {
      padding: 1rem;
    }
  }
  
  .preview_hidden {
    display: none;
  }
  
  .preview:hover {
    background: rgba(var(--color-blue), 0.05);
  }
  
  .preview__image {
    width: 48px;
    height: 70px;
    object-fit: cover;
    background: grey;
    border-radius: 2px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  }
  
  .preview__info {
    padding: 1rem;
  }
  
  .preview__title {
    margin: 0 0 0.5rem;
    font-weight: bold;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    color: rgba(var(--color-dark), 0.8)
  }
  
  .preview__author {
    color: rgba(var(--color-dark), 0.4);
  }

</style>
<button class = 'preview' data-preview >

        <slot name = 'bookImage'>
          <img class="preview__image" src=https://images.unsplash.com/photo-1603162610423-af7febeca563?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJpZGUlMjBhbmQlMjBwcmVqdWRpY2UlMjBib29rJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60 />
</slot>
    <div class="preview__info">
        <h3 class="preview__title"><slot name ='bookTitle'>Pride and Prejudice</slot></h3>
        <div class="preview__author"><slot name ='bookAuthor'>Jane Austen</slot></div>
    </div>
</button>
`;

// customElements.define('book-preview', 
// class extends HTMLElement {
//     constructor(){
//         super();
//         let bookPreview = document.getElementById('bookpreviewtemplate');
//         let bookdetails = bookPreview.content;
//         const shadowRoot = this.attachShadow({mode: "closed"}).appendChild(bookdetails.cloneNode(true));
//     }
// }
// );
// class BookPreview extends HTMLElement {
//     inner = this.attachShadow({mode: "closed"});

//     constructor() {
//         super();
//         const { content } = template;
//         this.inner.appendChild(contentontent.cloneNode(true));
//     }    
// }
customElements.define(
    'book-preview',
    class extends HTMLElement {
        inner = this.attachShadow({mode: "closed"});

    constructor() {
        super();
        const { content } = template;
        this.inner.appendChild(content.cloneNode(true))
        
        this.addEventListener('click',(event) => {
          const previewButton = event.target.closest('book-preview');
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
  
        })
    }    
}
);