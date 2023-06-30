import {LitElement, html} from "../libs/lit-html.js"

class App extends LitElement {
    /**
     * 
     * @returns {any}
     */
    return() {
        return html` <div>123</div>`
    }
}

customElements.define('tally-app', App)