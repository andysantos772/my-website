const container = document.querySelector('body');

let a = document.createElement('a');
a.textContent = 'About Link Created by JS';
a.setAttribute('href', "./pages/about.html");

container.appendChild(a);

console.log('Success');