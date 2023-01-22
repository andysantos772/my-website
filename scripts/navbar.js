// Write the navigation bar html, this script will be used in every page
document.write('\
<nav> \
  <a href="/home">HOME</a> \
  <a href="/about">ABOUT</a> \
  <div class="projects-block"> \
    <a href="javascript:void(0)" id="projects">PROJECTS</a> \
    <div class="project-dropdown"> \
      <a href="/rpg">RPG CREATOR</a> \
      <a href="">TEST</a> \
    </div> \
  </div> \
  <a href="/contact">CONTACT</a> \
</nav>');


// Code slightly modified from https://www.w3schools.com/howto/howto_js_dropdown.asp for projects dropdown menu
function toggleShow() {
    document.querySelector('.project-dropdown').classList.toggle('show');
}

document.getElementById('projects').addEventListener('click', toggleShow);

document.addEventListener('click', function(event) {
  if (!event.target.matches('#projects')) {
    const projectDropdown = document.querySelector('.project-dropdown');
    if (projectDropdown.classList.contains('show')) {
      projectDropdown.classList.remove('show');
    }
  }
});
