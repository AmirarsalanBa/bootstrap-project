// navigation toggle
const navBtn = document.getElementById('site-nav-btn');
const list = document.getElementById('site-nav-list');

navBtn.addEventListener('click', function(){
    list.classList.toggle('toggled');
    navBtn.classList.toggle('bi-list');
    navBtn.classList.toggle('bi-x');
})
