function showMenu() {
  document.getElementById("primaryNav").style.width = "100%";
}
function closeMenu() {
  document.getElementById("primaryNav").style.width = "0";
}

const openMenuBtn = document.getElementById("openMenuBtn");
openMenuBtn.onclick = showMenu;

const closeMenuBtn = document.getElementById("closeMenuBtn");
closeMenuBtn.onclick = closeMenu;
