"use strict"
let fetchApi =fetch('https://fakestoreapi.com/products') // api for the get request
    .then(response => response.json())
    .then(data => console.log(data));

data.sort((a,b) => {a.firstname.localeCompare(b.firstname)})
         