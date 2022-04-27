const navItems = document.querySelectorAll(".navigation__item");
const checkbox = document.querySelector(".navigation__checkbox");
navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    checkbox.checked = false;
  });
});
