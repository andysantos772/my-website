// function displayCharacters() {
//     fetch('/api/rpg/dnd', {
//         method: 'GET',
//     })
//     .then(response => response.json())
//     .then(res => {
//         const displayBox = document.querySelector('.display-box');

//         for (const char of res) {
//             const h1 = document.createElement('h1');
//             h1.textContent = char.name;
//             const h3 = document.createElement('h3');
//             h3.textContent = char.class;
//             const h5 = document.createElement('h5');
//             h5.textContent = char.race;

//             displayBox.appendChild(h1);
//             displayBox.appendChild(h3);
//             displayBox.appendChild(h5);
//         }
//     });
// }

