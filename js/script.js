let navigation = document.getElementById("navigation");
let buttonBurger = document.getElementById("buttonBurger");
buttonBurger.addEventListener("click", (evt) => {
    evt.preventDefault();
    navigation.classList.toggle("removed");
    buttonBurger.classList.toggle("fixed");
})