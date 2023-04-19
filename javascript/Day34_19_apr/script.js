function getStyleValue(ele, property) {
  return window.getComputedStyle(ele)[property];
}

const title = document.querySelector(".title");

const value = getStyleValue(title, "color");

const list = document.querySelector(".list");

list.style.margin = "40px";

const isList = list.classList.contains("list");
console.log(isList);

list.classList.add("list-box");
list.classList.remove("list");

//
list.classList.replace("list", "list-box");

const listid = list.id;
console.log(listid);

const myBtn = document.getElementById("my_btn");

myBtn.addEventListener("click", onMyBtnClick);

myBtn.addEventListener("click", onMyBtnClick2);

function onMyBtnClick(e) {
    console.log("I am  triggered",e);
  list.classList.toggle("d-none");
}

function onMyBtnClick2() {
  console.log("I am also triggered");
}

window.addEventListener("resize", function () {
  console.log(window.innerWidth, window.innerHeight);
});

myBtn.onmouseover = function () {
  console.log("I am over Buttn");
};




const textBox = document.getElementById('text_box');


textBox.addEventListener('keydown',function(event){
    console.log(event.key,event.keyCode)
})



