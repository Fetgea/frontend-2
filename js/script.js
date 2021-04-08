let navigation = document.getElementById("navigation");
let buttonBurger = document.getElementById("buttonBurger");
let buttonLogin = document.getElementById("buttonLogin");

buttonBurger.addEventListener("click", (evt) => {
    evt.preventDefault();
    let buttonStyle = getComputedStyle(buttonBurger);
    let fullWidth = buttonBurger.offsetWidth + parseInt(buttonStyle.marginLeft) + parseInt(buttonStyle.marginRight);

    if (navigation.classList.contains("removed")) {
        navigation.classList.remove("removed");
        buttonLogin.style.marginRight = fullWidth + "px";
        buttonBurger.classList.add("fixed");
    } else {
        navigation.classList.add("removed");
        buttonLogin.style.marginRight = 0;
        buttonBurger.classList.remove("fixed");
    }    
})