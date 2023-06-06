// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  if (dividend !== Number || divider !== Number){
    document.body.innerText = 'Something critical went wrong. Please reload the page.'
    throw new Error ('NaN')
  }

  if (dividend === '' || divider === '') {
    result.innerText = 'Division not performed. Both values are required in inputs. Try again.'
    return 
  }
  if (divider < 0 ) {
    result.innerText = 'Division not performed. Invalid number provided. Try again.'
    throw new Error ('Invalid division')
  }
  result.innerText = parseFloat(Math.floor(dividend / divider)).toFixed(0);
  
});