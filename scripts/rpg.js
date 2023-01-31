const config = require('config');
const cloudinary = require('cloudinary').v2;

// Use buttons to toggle between the 3 forms for dnd characters
function toggleForm() {
    const chosenForm = document.querySelector(`.${this.id}`);
    if (!chosenForm.classList.contains('show')) {
        document.querySelector('.forms .show').classList.remove('show');
        chosenForm.classList.add('show');
    }
}

document.querySelector('#stats').addEventListener('click', toggleForm);
document.querySelector('#bio').addEventListener('click', toggleForm);
document.querySelector('#spells').addEventListener('click', toggleForm);

// Preview the image the user uploaded
function showPortrait() {
    const portrait = document.querySelector('#portrait');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
        portrait.src = reader.result;
    };

    if (file) reader.readAsDataURL(file);
    else portrait.src = "";
}

// Submit the forms to the database
function submitForms() {
    fetch('/api/rpg/dnd', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "id": 78912 })
    })
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)));
}

function submitInfo() {
    //
}

function submitStats() {
    //
}

function submitBio() {
    //
}

function submitSpells() {
    //
}


// Add spells to the spell list



cloudinary.config({
    cloud_name: config.get('cloudName'),
    api_key: config.get('cloudinaryApiKey'),
    api_secret: config.get('cloudinaryApiSecret')
});

function testUpload() {
    const file = document.querySelector('input[type=file]').files[0];
    console.log(file);
    cloudinary.uploader.upload(file, {public_id: "zeus"});
    const url = cloudinary.url("zeus", {
        width: 100,
        height: 150,
        Crop: 'fill'
    });
    console.log(url);
}
