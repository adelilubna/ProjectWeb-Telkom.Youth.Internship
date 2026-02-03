// SIDEBAR
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

// NOTIF
const notifBtn = document.getElementById("notifBtn");
const notifPanel = document.getElementById("notifPanel");

notifBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  notifPanel.classList.toggle("active");
});

// klik di luar = nutup
document.addEventListener("click", function (e) {
  if (!e.target.closest(".notif-wrapper")) {
    notifPanel.classList.remove("active");
  }
});
