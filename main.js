document.querySelectorAll(".carousel").forEach(carousel => {
   const items = carousel.querySelectorAll(".carousel-item");
   const buttonsHtml = Array.from(items, () => `<span class="carousel-button"></span>`).join("");

   carousel.insertAdjacentHTML("beforeend", `<div class="carousel-nav">${buttonsHtml}</div>`);

   const buttons = carousel.querySelectorAll(".carousel-button");

   buttons.forEach((button, i) => {
       button.addEventListener("click", () => {
           // Unselecting all items
           items.forEach(item => item.classList.remove("carousel-item--selected"));
           buttons.forEach(button => button.classList.remove("carousel-button--selected"));

           // Selecting the clicked item
           items[i].classList.add("carousel-item--selected");
           buttons[i].classList.add("carousel-button--selected");
       });
   });

   // Selecting the first item by default
   if (items.length > 0 && buttons.length > 0) {
       items[0].classList.add("carousel-item--selected");
       buttons[0].classList.add("carousel-button--selected");
   } else {
       console.error("No items or buttons to select");
   }
});
