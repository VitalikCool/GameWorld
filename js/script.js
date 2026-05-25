const button = document.getElementById("MoreButton");
const hiddenItems = document.querySelectorAll(".more");

let isVisible = false;

button.addEventListener("click", () => {

  if (!isVisible) {

    hiddenItems.forEach(item => {
      item.style.display = "block";
    });

    button.textContent = "Скрыть";
    isVisible = true;

  } else {

    hiddenItems.forEach(item => {
      item.style.display = "none";
    });

    button.textContent = "Показать ещё";
    isVisible = false;
  }

});

const buttonTwo = document.getElementById("MoreButtonTwo");
const hiddenItemsTwo = document.querySelectorAll(".moreTwo");

let isVisibleTwo = false;

buttonTwo.addEventListener("click", () => {

  if (!isVisibleTwo) {

    hiddenItemsTwo.forEach(item => {
      item.style.display = "flex";
    });

    buttonTwo.textContent = "Скрыть";
    isVisibleTwo = true;

  } else {

    hiddenItemsTwo.forEach(item => {
      item.style.display = "none";
    });

    buttonTwo.textContent = "Показать ещё";
    isVisibleTwo = false;
  }

});