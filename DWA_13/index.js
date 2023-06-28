const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

//names.forEach(element => console.log(element));

// const getMatching = (element, index) => {
//     console.log(`${element} is from ${provinces[index]} `)
// }

// names.forEach(getMatching)
 
// console.log (
//     provinces.map(
//         element => element.toLocaleUpperCase()
//         ))

// const sortedProvinces = provinces.sort()
// console.log (sortedProvinces)

// const capeProvinces = provinces.filter(element => (element.toLocaleLowerCase()).includes("cape"))
// console.log (capeProvinces.length)

// /**
//  * 
//  * @param {Array} element 
//  */
// const containsSArray = names.map(name => (name.toLocaleLowerCase().split('')).some(char => char === 's'))

// console.log (containsSArray)


// const provinceObject = names.reduce((acc, name, index) => {
//   acc[name] = provinces[index];
//   return acc;
// }, {});

// console.log(provinceObject);

//PART 2
const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]



// console.log (
//     products.forEach(element => console.log (element.product))
// )

// console.log (
//     products.filter(element => element.product.length > 5)
// )

// console.log(
//     products
//       .filter(item => item.price !== '') // Filter out products without prices
//       .map(item => ({ ...item, price: Number(item.price) })) // Convert prices to numbers
//       .reduce((acc, item) => acc + item.price, 0) // Calculate combined price using reduce
//   );

// console.log(
//     products.reduce((acc, item, index) => {
//       if (index === 0) {
//         return item.product;
//       } else if (index === products.length - 1) {
//         return `${acc} and ${item.product}`;
//       } else {
//         return `${acc}, ${item.product}`;
//       }
//     }, '')
//   );

// console.log(
//     products.reduce((acc, item) => {
//       if (!item.price) return acc;
      
//       const price = Number(item.price);
      
//       if (price > acc.highestPrice) {
//         acc.highestPrice = price;
//         acc.highestName = item.product;
//       }
      
//       if (price < acc.lowestPrice || acc.lowestPrice === undefined) {
//         acc.lowestPrice = price;
//         acc.lowestName = item.product;
//       }
      
//       return acc;
//     }, { highestPrice: -Infinity, lowestPrice: Infinity })
//   );

// const originalObject = {
//     product: 'banana',
//     price: "2",
//     quantity: 3
//   };

// const newObject = Object.entries(originalObject).reduce((acc, [key, value]) => {
//   if (key === 'product') {
//     acc.name = value;
//   } else if (key === 'price') {
//     acc.cost = value;
//   } else {
//     acc[key] = value;
//   }
//   return acc;
// }, {});

// console.log(newObject);