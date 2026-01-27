const toggle = document.getElementById('menuToggle');
const sidebar = document.querySelector('.sidebar');
const navItems = document.querySelectorAll('.nav-item');

toggle.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(n => n.classList.remove('active'));
    item.classList.add('active');
  });
});
