// let items = document.querySelectorAll(".item");
// items.addEventListener("drag", )
// let dragitem = null;
// items.forEach((item)=> {
//     items.addEventListener("dragstart", () => {
//         dragitem= item;
//     })

//     items.addEventListener("dragend", () => {
//         dragitem= null;
//     })

// });

// let container = document.getElementById("container1");
// container.addEventListener("dragover", (event) => {
//     event.preventDefault();
// });

// container.addEventListener("drop", (event) => {
//     event.preventDefault();
// });

// let containerr = document.getElementById("container2");
// container.addEventListener("dragover", (event) => {
//     event.preventDefault();
// });

// containerr.addEventListener("drop", (event) => {
//     event.preventDefault();
// });

let items = document.querySelectorAll(".item");
let dragitem = null;
items.forEach((item) => {
    item.addEventListener("dragstart", () => {
        dragitem = item;
    });
    item.addEventListener("dragend", () => {
        dragitem = null;
    });

});

let container = document.getElementById("container1");
container.addEventListener("dragover", (event) => {
    event.preventDefault();
});
container.addEventListener("drop", (event) => {
    event.preventDefault();
    if (dragitem) {
        container.appendChild(dragitem);
    }
});
let containerr = document.getElementById("container2");
containerr.addEventListener("dragover", (event) => {
    event.preventDefault();
});
containerr.addEventListener("drop", (event) => {
    event.preventDefault();
    if (dragitem) {
        containerr.appendChild(dragitem);
    }
});