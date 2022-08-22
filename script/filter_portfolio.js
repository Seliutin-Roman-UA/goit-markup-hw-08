// Все кнопки серые
function makeGreyStyle() {
  for (let elem of document.querySelectorAll(".filter li button")) {
    elem.className = "filter__button filter__button--grey";
  }
}
//перебираем коkекцию карточек портфллио,
//те что соответствуют фильтру остаются, остальніе отключаются
function applyFiler(keyOfFilter) {
  const elements = document.querySelectorAll(".projects li");
  for (let i of elements) {
    let keyOfCard = i.lastElementChild.lastElementChild.innerHTML;
    if (keyOfFilter === keyOfCard) {
      console.log(
        `совпало. ключ = ${keyOfFilter} ключ карточки = ${keyOfCard}`
      );
      i.style.display = "block";
    } else {
      console.log(
        `несовпало. ключ = ${keyOfFilter} ключ карточки = ${keyOfCard}`
      );
      i.style.display = "none";
    }
  }
}

document.getElementById("ALL").addEventListener("click", (event) => {
  makeGreyStyle();
  document.getElementById("ALL").className =
    "filter__button filter__button--blue";
  const elements = document.querySelectorAll(".projects li");
  for (let i of elements) {
    i.style.display = "block";
  }
});

document.getElementById("Веб-сайт").addEventListener("click", (event) => {
  makeGreyStyle();
  applyFiler("Веб-сайт");
  document.getElementById("Веб-сайт").className =
    "filter__button filter__button--blue";
});

document.getElementById("Приложение").addEventListener("click", () => {
  makeGreyStyle();
  applyFiler("Приложение");
  document.getElementById("Приложение").className =
    "filter__button filter__button--blue";
});

document.getElementById("Дизайн").addEventListener("click", () => {
  makeGreyStyle();
  applyFiler("Дизайн");
  document.getElementById("Дизайн").className =
    "filter__button filter__button--blue";
});
document.getElementById("Маркетинг").addEventListener("click", () => {
  makeGreyStyle();
  applyFiler("Маркетинг");
  document.getElementById("Маркетинг").className =
    "filter__button filter__button--blue";
});
