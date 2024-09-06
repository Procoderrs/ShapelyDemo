document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon-otr');
  const menu = document.querySelector('.menu-expended');
  
  menuIcon.addEventListener('click', function() {
      menu.classList.toggle('show');
  });
});
