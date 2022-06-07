// many items slider
var sliderScrollRight = document.querySelector(".slider .slide-right"),// slide arrow two
    sliderScrollLeft = document.querySelector(".slider .slide-left"),// slide arrow one
    sliderItem = Array.from(document.querySelectorAll(".slider .item")),// slider items
    sliderBody = document.querySelector(".slider"),// slider
    body = document.body;
    
var itemsNumber = 4, // the number of items in the slider which appear in the screen
    itemWidth = 0; // item width
    
// specify the item width dynamicly
console.log(document.body.clientWidth);
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
let v = 0, // current div
    step = 4; // step of slides
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

    sliderItem.forEach(el => {
        itemWidth = sliderBody.clientWidth / itemsNumber;
        el.style.minWidth = itemWidth - 30 + "px";
    });
    
}