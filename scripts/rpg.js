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