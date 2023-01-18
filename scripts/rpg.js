fetch('/api/rpg/dnd', {
    method: 'GET',
})
.then(response => response.text())
.then(text => console.log(text))