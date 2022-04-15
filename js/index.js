const openBtn = document.getElementById("open-menu");
const closeBtn = document.getElementById("close-menu");
const navigation = document.getElementById("nav-wrapper");
const features = document.getElementById("features");
const company = document.getElementById("company");

const openMenu = () => {
  navigation.classList.add("open");
  document.body.classList.add("lock-scroll");
};

const closeMenu = () => {
  navigation.classList.remove("open");
  document.body.classList.remove("lock-scroll");
};

const toggleActive = (e) => {
  e.target.classList.toggle("active");
};

openBtn.addEventListener("click", openMenu);

closeBtn.addEventListener("click", closeMenu);

navigation.addEventListener("click", (e) => {
  if (e.target.nodeName === "DIV") {
    closeMenu();
  }
});

features.addEventListener("click", toggleActive);
company.addEventListener("click", toggleActive);
