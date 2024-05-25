const $listItem = document.querySelectorAll(".accordion-item");

$listItem.forEach((item) => {
  document.querySelector(".accordion-item").classList.add("active");
  item.addEventListener("click", () => {
    $listItem.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });
    item.classList.toggle("active");
  });
});



