let left = document.querySelector("#left-btn");
let right = document.querySelector("#right-btn");
let btn = document.querySelector(".ul-item");


btn.addEventListener("wheel", (e) => {
    btn.style.scrollBehavior = "smooth";
    btn.scrollLeft += e.deltaX;

});

left.addEventListener("click", function () {
    btn.style.scrollBehavior = "smooth";
    btn.scrollLeft -= 200;

})
right.addEventListener("click", function () {
    btn.style.scrollBehavior = "smooth";
    btn.scrollLeft += 200;

})

let liA = document.querySelectorAll(".btn");

liA.forEach(function (listItem) {

    listItem.addEventListener("click", function () {

        liA.forEach(function (removeBTN) {
            removeBTN.classList.remove("active")

        });

        listItem.classList.add("active");
    });

});
