let product = [
    {
        picture: './img/book.jpg',
        title: 'Computer Hacking Beginners Guide',
        desc: 'This book will teach you how you can protect yourself from most common hacking attacks -- by knowing how hacking actually works! After all, in order to prevent your system from being compromised, you need to stay a step ahead of any criminal hacker. You can do that by learning how to hack and how to do a counter-hack.',
        price: '$7.99'
     }
];


const printToDom = (stringToPrint, divId) => {
    const printString = document.getElementById(divId);
    printString.innerHTML = stringToPrint;
  }

const createCard = () => {
let Newstring = '';

for (let i = 0; i < product.length; i++) {

Newstring += `<div class="card-header bg-white">`;
Newstring += `<img class="m-2 cart-img-top" src="${product[i].picture}" alt="book picture">`;
Newstring += `</div>`;
Newstring += `<div class="card-body">`;
Newstring += `<h4 class="card-title text-center">${product[i].title}</h3>`;
Newstring += `<p class="card-text text-justify">${product[i].desc}</p>`;
Newstring += `</div>`;
Newstring += `<div class="card-footer bg-white">`;
Newstring += `<div class="p-2 m-2 display-4 text-center">${product[i].price}</div>`;
Newstring += `<button class="btn btn-outline-success btn-block" id="addButton">Add to cart</button>`;
Newstring += ` <hr>`;
Newstring += `<div class="d-flex justify-content-center">`;
Newstring += `<i class="p-2 m-2 material-icons">shopping_cart</i>`;
Newstring += `<h5 class="p-2 m-2">Cart:</h5>`;
Newstring += `<h5 class="p-2 m-2 border border-alert"  style="width:200px" id="cartItem"></h5>`;
Newstring += `</div>`;
Newstring += `</div>`;

    printToDom(Newstring, ProductCard);
        
    };
};
