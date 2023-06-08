// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  const answer = dividend / divider
 try {
  if (dividend === '' || divider === '') {
    result.innerText = 'Division not performed. Both values are required in inputs. Try again.'
    return 
  }

  if (isNaN(answer)){
    document.body.innerText = 'Something critical went wrong. Please reload the page.'
    throw new Error ('Cannot calculate non-numeric values')
  }

  if (divider < 0 ) {
    result.innerText = 'Division not performed. Invalid number provided. Try again.'
    throw new Error ('Invalid division')
  }
} catch (error) {
    console.error (error.message)
}
  result.innerText = parseFloat(Math.floor(answer)).toFixed(0);
  
});