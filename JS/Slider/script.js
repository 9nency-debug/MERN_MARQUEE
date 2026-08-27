// let previous = document.querySelector(".prev");

// previous.addEventListener("click", )


// const box = document.querySelector(".box");
// const next = document.querySelector(".next");
// const prev = document.querySelector(".prev");
// const slides = document.querySelectorAll(".box > div");

// let currentSlide = 0;

// // function showSlide() {
// //     box.style.transform = `translateX(-${currentSlide * 100}%)`;
// // }

// next.addEventListener("click", () => {
//     if(currentSlide < slides.length - 1){
//         currentSlide++;
//         showSlide();
//     }
// });

// prev.addEventListener("click", () => {
//     if(currentSlide > 0){
//         currentSlide--;
//         showSlide();
//     }
// });

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let box = document.querySelector(".box");
let dots = document.querySelectorAll("#dots>h1");
dots[0].style.color = "seagreen";
let index = 0;

next.addEventListener("click", () =>  {
    // console.log("next");
    index++;
    if(index >=3) {
        index = 0;
    }
    box.style.transform = `translate(-${index * 100}%)`;
    console.log(index);
    dots.forEach((element, i) => {
        if(index == i) {
            dots[i].style.color = "white";
        } else {
            dots[i].style.color = "black";
        }
    })
});

prev.addEventListener("click", () =>  {
    // console.log("next");
    index--;
    if(index < 0) {
        index = 2;
    }
    box.style.transform = `translate(-${index * 100}%)`;
    console.log(index);

    // if you give +ve :
    //     box.style.transform = `translate(${index * 100}%)`;
    // so it morevs left
    // 
});

let count = 0;
setInterval(() => {
    // count++;
    // console.log(count);
     index++;
    if(index >=3) {
        index = 0;
    }
    box.style.transform = `translate(-${index * 100}%)`;
    console.log(index);
    dots.forEach((element, i) => {
        if(index == i) {
            dots[i].style.color = "white";
        } else {
            dots[i].style.color = "black";
        }
    })
}, 2000);


