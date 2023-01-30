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
    else preview.src = "";
}

// Submit the forms to the database
function submitForms() {
    //
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
