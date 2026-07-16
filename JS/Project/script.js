// let items = document.getElementsByClassName("item");
let items = document.querySelectorAll(".item");
//forEach(data, index)
let dragitem=null;
items.forEach((item)=> {
    console.log(item);
    item.addEventListener("dragstart", ()=> {
        dragitem = item;
    })

    item.addEventListener("dragend", ()=> {
        dragitem = null;
    })
});

let container = document.getElementById("container");
container.addEventListener("dragover", (event)=> {
    event.preventDefault(); 
});

container.addEventListener("drop", () => {
    //dragitem = item; => selected dragitem
    container.append(dragitem);
});