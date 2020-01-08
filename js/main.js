function classToggle() {
  let navs = document.querySelectorAll('.Navbar__Items');
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
};

function activeToggle(name) {
  let nav_btns = document.querySelectorAll('.nav-btn');  
  nav_btns.forEach(nav_btn => {
    if (nav_btn.classList.contains('active')) {
      nav_btn.classList.toggle('inactive');
      nav_btn.classList.toggle('active');      
    } 
  });
  
  document.getElementById(name + '-btn').classList.toggle('inactive');  
  document.getElementById(name + '-btn').classList.toggle('active');
  displayToggle(name);  
};

function displayToggle(name) {
  let contents = document.querySelectorAll('.content');
  console.log(name);
  contents.forEach(content => {
    content.style.display = "none";
  });  
  document.getElementById(name + "-body").style.display = "block";
};

function activeToggleProjects() {
  let name = "projects";
  activeToggle(name);
};


function activeToggleSounds() {
  let name = "sounds";
  activeToggle(name);
};

function activeToggleBio() {
  let name = "bio";
  activeToggle(name);
}

function activeToggleContact() {
  let name = "contact";
  activeToggle(name);  
};

function activeToggleResume() {
  let name = "resume";
  activeToggle(name);
};

document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);

document.getElementById('projects-btn')
  .addEventListener('click', activeToggleProjects)

document.getElementById('sounds-btn')
  .addEventListener('click', activeToggleSounds);  

document.getElementById('bio-btn')
  .addEventListener('click', activeToggleBio);

document.getElementById('contact-btn')
  .addEventListener('click', activeToggleContact);  

document.getElementById('resume-btn')
  .addEventListener('click', activeToggleResume);  

$(document).ready(function() {
  activeToggleBio()
});






