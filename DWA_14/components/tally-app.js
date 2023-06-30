import {LitElement, html} from "../libs/lit-html.js"

class App extends LitElement {
    
    static properties = {
        open: {type: 'boolean', state: true},
        value: {type: 'number', state: 0 }
    }

    constructor() {
        super();
        this.open = false
        this.value = 0
        
    }

    increment () {
        this.value++

    }
    decrement () {
        this.value--
     
    }

    reset () {
        this.value = 0 
        this.open = !this.open

    }

    /**
     * 
     * @returns {any}
     */
    render() {
        return html`  
        <sl-dialog  open no-header>
        <div class="counterDisplay">
            <sl-input size="small" filled readonly value =${this.value} data-key="number"></sl-input>
        </div>
        <div class="counterButtons">
        <sl-button @click = ${this.increment}>+</sl-button>
        <sl-button @click = ${this.decrement}>-</sl-button>
        </div>
        <div class="resetButton">
        <sl-button size="medium" pill @click = ${this.reset} >Reset</sl-button>
        <sl-dialog open = ${this.open} >
        <sl-alert variant="warning" open  >
            <sl-icon slot="icon" name="exclamation-triangle" ></sl-icon>
            The counter has been reset 
          </sl-alert>
          </sl-dialog>
          
        </div>
    </sl-dialog>`
    }
}

customElements.define('tally-app', App)