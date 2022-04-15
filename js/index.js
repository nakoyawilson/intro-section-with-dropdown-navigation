const openBtn = document.getElementById("open-menu");
const closeBtn = document.getElementById("close-menu");
const navigation = document.getElementById("nav-wrapper");

openBtn.addEventListener("click", () => {
  navigation.classList.add("open");
  document.body.classList.add("lock-scroll");
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("open");
  document.body.classList.remove("lock-scroll");
});
