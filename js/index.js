const openBtn = document.getElementById("open-menu");
const closeBtn = document.getElementById("close-menu");
const navigation = document.getElementById("nav-wrapper");

openBtn.addEventListener("click", () => {
  navigation.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("open");
});
