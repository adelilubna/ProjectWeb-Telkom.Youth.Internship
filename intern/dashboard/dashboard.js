const navs=document.querySelectorAll('.nav-item');
const pages=document.querySelectorAll('.page');

const menuBtn=document.querySelector('.menu-btn');
const sidebar=document.querySelector('.sidebar');


navs.forEach(nav=>{

nav.addEventListener('click',()=>{

navs.forEach(n=>n.classList.remove('active'));
pages.forEach(p=>p.classList.remove('active'));

nav.classList.add('active');

const target=nav.dataset.page;

document
.getElementById(target)
.classList.add('active');

sidebar.classList.remove('show');

});

});


menuBtn.addEventListener('click',()=>{

sidebar.classList.toggle('show');

});
