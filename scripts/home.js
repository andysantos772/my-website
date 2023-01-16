const container = document.querySelector('body');

let button = document.createElement('button');
button.textContent = 'About Link Created by JS';
button.href = './about';

container.appendChild(button);