// create header style elements
var headerStyle = document.querySelectorAll("h2.header-style");
for (let i = 0; i < headerStyle.length; i++) {
    var div = document.createElement("div"),
        spanOne = document.createElement("span"),
        spanTwo = document.createElement("span");
    div.appendChild(spanOne);
    div.appendChild(spanTwo);
    headerStyle[i].appendChild(div);
}
// end header element

// fix dropdown
var dropdownToggle = document.querySelector(".dropdown-toggle"),
    dropdownMenu = document.querySelector(".dropdown-menu");
dropdownToggle.onclick = function () {
    if (this.getAttribute("data-open") == "false") {
        this.setAttribute("data-open", "true");
        dropdownMenu.style.display = "block";
    } else {
        dropdownMenu.style.display = "none";
        this.setAttribute("data-open", "false");
    }
}
// end fixing dropdown

//scroll effect
var navContainer = document.querySelector("nav .container-fluid");
window.onscroll = function () {
    if (document.documentElement.scrollTop >= 100) {
        navContainer.style.height = "60px";
    } else {
        navContainer.style.height = "100px";
    }
}
// end scroll effect
// open search input
if (window.innerWidth > 768) {
    var openSearch = document.querySelector("nav .open-search"),
        navSearchForm = document.querySelector("nav>form"),
        closeSearch = document.querySelector("nav .close-search");
    openSearch.onclick = function () {
        if (this.getAttribute("data-open") == "false") {
            this.setAttribute("data-open", "true");
            navSearchForm.style.height = "100px";
        } else {
            this.setAttribute("data-open", "false");
            navSearchForm.style.height = "0";
        }
    }
    closeSearch.onclick = function () {
        navSearchForm.style.height = "0";
    }
}
// end open search
// fix responsive issues
function responsiveIssues() {
    //nav collapser
    var listUl = document.querySelector(".list .unstyled");
    listUl.style.height = window.innerHeight + "px";
    var navbarCollapser = document.querySelector(".navbar-collapser");
    navbarCollapser.onclick = function () {
        if (this.getAttribute("data-open") == "false") {
            this.setAttribute("data-open", "true");
            listUl.style.left = 0;
        } else {
            this.setAttribute("data-open", "false");
            listUl.style.left = -150 + "px";
        }
    }

    var openSearch = document.querySelector("nav .open-search"),
        navSearchForm = document.querySelector("nav>form"),
        closeSearch = document.querySelector("nav .close-search");
    openSearch.onclick = function () {
        if (this.getAttribute("data-open") == "false") {
            this.setAttribute("data-open", "true");
            navSearchForm.style.height = "80px";
            console.log(navSearchForm);
        } else {
            this.setAttribute("data-open", "false");
            navSearchForm.style.height = "0";
        }
    }
    closeSearch.onclick = function () {
        navSearchForm.style.height = "0";
    }
}
if (window.innerWidth <= 768) {
    responsiveIssues();
}
window.onresize = function () {
    responsiveIssues();
}

// many items slider
var sliderScrollRight = document.querySelector(".slider .slide-right"),// slide arrow two
    sliderScrollLeft = document.querySelector(".slider .slide-left"),// slide arrow one
    sliderItem = Array.from(document.querySelectorAll(".slider .item")),// slider items
    sliderBody = document.querySelector(".slider"),// slider
    body = document.body;
    
var itemsNumber = 4, // the number of items in the slider which appear in the screen
    itemWidth = 0, // slide item width
    step = 4; // step of slides
    
// specify the item width dynamicly
if (body.clientWidth >= 1200) {
    itemsNumber = 4;
} else if (body.clientWidth >= 1024 && body.clientWidth < 1200) {
    itemsNumber = 3;
} else if (body.clientWidth >= 768 && body.clientWidth < 1024) {
    itemsNumber = 2;
} else if (body.clientWidth < 768) {
    itemsNumber = 1;
}

sliderItem.forEach(el => {
    itemWidth = sliderBody.clientWidth / itemsNumber;
    el.style.minWidth = itemWidth - 30 + "px";
});

// during scrolling
let v = 0; // current div in the slider
    step = itemsNumber;
sliderScrollLeft.onclick = () => {
    if (v > 0) {
        v -= step;
        for (let i = 0; i <sliderItem.length; i++) {
            sliderItem[i].style.left = -v * itemWidth + 30 + "px";
        }
    }
}

sliderScrollRight.onclick = () => {
    if (v < sliderItem.length - itemsNumber) {
        v += step;
        for (let i = 0; i <sliderItem.length; i++) {
            sliderItem[i].style.left = -v * itemWidth + 30 + "px";
        }
    }
}

window.onresize = function () {
    
    // specify the slider item width dynamicly
    if (body.clientWidth >= 1200) {
        itemsNumber = 4;
    } else if (body.clientWidth >= 1024 && body.clientWidth < 1200) {
        itemsNumber = 3;
    } else if (body.clientWidth >= 768 && body.clientWidth < 1024) {
        itemsNumber = 2;
    } else if (body.clientWidth < 768) {
        itemsNumber = 1;
    }
    step = itemsNumber;
    
    sliderItem.forEach(el => {
        itemWidth = sliderBody.clientWidth / itemsNumber;
        el.style.minWidth = itemWidth - 30 + "px";
    });

    // responsive issues function triger
    responsiveIssues();
}