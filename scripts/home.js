const container = document.querySelector('body');

let a = document.createElement('a');
a.textContent = 'About Link Created by JS';
a.setAttribute('href', "./about");

container.appendChild(a);
