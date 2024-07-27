document.querySelectorAll(".carousel").forEach(carousel => {
   const items += carousel.querySelectorAll(".carousel-item")
   const buttonsHtml = Array.from(items,() =>{
    return    `<span class="carousel-button"></span>`;
   })  
   carousel.insertAdjacentHTML("beforeend", 
   `<div class="carousel-nav> ${buttonsHtml} </div>`)
   console.log(buttonsHtml);

   const buttons = carousel.querySelectorAll(".carousel-button");

   buttons.forEach((button, i) => {
    button.addEventListener("click", () =>{
        // unselecting all items
        items.forEach(item => item.classList.remove("carousel-item--selected"));
        buttons.forEach(button =>button.classList.remove("carousel-button--selected"));
        
        items[i].classList.add("carousel-item--selected");
        buttons[i].classList.add("carousel-button--selected")
    });
   });
//selecting the first item in the browser
   items[0].classList.add("carousel-item--selected");
   buttons[0].classList.add("carousel-button--selected")
});