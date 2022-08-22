document.querySelector(".button-burger-menu").addEventListener("click", () => {
  console.log(
    "Hello (переход по бургеру)= ",
    document.querySelector(".button-burger-menu")
  );
  document.getElementById("mobile-menu").className =
    "conteiner-mobile-menu--visible";
   document.body.classList.toggle("modal-menu-open");
});
document.querySelector(".button-cross").addEventListener("click", () => {
  console.log(
    "Hello (віход из меню)= ",
    document.getElementById("mobile-menu"));
  document.getElementById("mobile-menu").className = "conteiner-mobile-menu";
  document.body.classList.toggle("modal-menu-open");
});
