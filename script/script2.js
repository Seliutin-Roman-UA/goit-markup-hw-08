function makeGreyStyle() {
  for (let elem of document.querySelectorAll(".filter li button")) {
    elem.className = "button grey";
  }
}

// все карточки порфолио "отключаем"
function hiddenCard() {
  const elements = document.querySelectorAll(".projects li");
  for (let i of elements) {
    i.style.display = "none";
  }
}

//перебираем карточки портфолио, которые сооветсвуют фильтру и "включаем" их
function applyFiler(keyOfFilter) {
    const elements = document.querySelectorAll(
      `[data-tape-card="${keyOfFilter}"]`);
    console.log(elements);

  for (let i of elements) {
    i.style.display = "block";
  }
}

document.getElementById("ALL").addEventListener("click", (event) => {
  makeGreyStyle();
  document.getElementById("ALL").className = "button blue";
  const elements = document.querySelectorAll(".projects li");
  for (let i of elements) {
    i.style.display = "block";
  }
});

document.getElementById("Веб-сайт").addEventListener("click", (event) => {
  makeGreyStyle();
  hiddenCard();
  applyFiler("Веб-сайт");
  document.getElementById("Веб-сайт").className = "button blue";
});

document.getElementById("Приложение").addEventListener("click", () => {
  makeGreyStyle();
  hiddenCard();
  applyFiler("Приложение");
  document.getElementById("Приложение").className = "button blue";
});

document.getElementById("Дизайн").addEventListener("click", () => {
  makeGreyStyle();
  hiddenCard();
  applyFiler("Дизайн");
  document.getElementById("Дизайн").className = "button blue";
});
document.getElementById("Маркетинг").addEventListener("click", () => {
  makeGreyStyle();
  hiddenCard();
  applyFiler("Маркетинг");
  document.getElementById("Маркетинг").className = "button blue";
});
