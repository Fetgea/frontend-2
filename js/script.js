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
});
jQuery.fn.extend({
    getMaxZ: function() {
        return Math.max.apply(null, jQuery(this).map(function() {
            let z;
            return isNaN(z = parseInt(jQuery(this).css("z-index"), 10)) ? 0 : z;
        }));
    }
});

$(document).ready(function() {
    let clicked = false;
    $(".readMore").readmore({
        afterToggle: (trigger, element, expanded) => {
            let parent = $(element).parent();
            if ($(trigger).hasClass("hideMore")) {
                parent.removeAttr("style");
                let divWrapper = parent.siblings(".testimonyCardAppend");
                $(divWrapper).remove();
            }
        },
        beforeToggle: (trigger, element, expanded) => {
            let wrapper = $(element).parents(".testimonyCardWrapper");
            let siblings = $(wrapper).siblings();
            if (!clicked) {
                clicked = true;
                siblings.each((index, element) => {
                    let readmore = $(element).find("div.readMore");
                    if (readmore.attr("aria-expanded") == "true") {
                        let button = $(element).find("a.buttonReadMore");
                        button.trigger("click");
                    }
                });
                clicked = false;
            }   
            let parent = element.parent();
            let height = parent.outerHeight(true);
            let width = parent.outerWidth();
            if ($(trigger).hasClass("readMore")) {
                let zIndex = $(".testimonyCard").getMaxZ();
                parent.css({ position: "absolute", width: width, "z-index": zIndex + 1 });
                $(wrapper).append(`<div class="testimonyCardAppend" style="height:${height}px"></div>`);
            }
        },
        collapsedHeight: 200,
        speed: 75,
        lessLink: "<a class='buttonReadMore hideMore' href='#'>Hide</a>",
        moreLink: "<a class='buttonReadMore readMore' href='#'>Read more</a>"
    });
});
