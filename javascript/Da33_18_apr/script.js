const allLis = document.getElementsByTagName("li");
console.log(allLis);
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs, paragraphs.length);

const paras = document.getElementsByClassName("para");
console.log(paras, paras.length);

const my_para = document.getElementById("my_para");

console.log(my_para, typeof my_para);

const ul = document.getElementById("list");

console.log(typeof ul.innerHTML);

console.log(my_para.innerText);

my_para.innerHTML = "Ramesh is good boy";

const element = document.querySelector(".list_item");

console.log(element.innerHTML);

const prince = document.querySelector("#price");

console.log(prince.innerHTML);

const elements = document.querySelectorAll(".list_item");

console.log(elements);

{
  /* <article class="card"></article> */
}
const article = document.createElement("article");

article.classList.add("card");

// <h5>Utkarsh</h5>
const name = document.createElement("h5");

name.innerHTML = "Utkarsh";

//<p>24</p>
const age = document.createElement("p");

age.innerHTML = 24;

// <p>Agra</p>
const city = document.createElement("p");

city.innerHTML = "Agra";

article.append(name);
article.append(age);
article.append(city);

/*
<article class="card">
   
    <h5>Utkarsh</h5>
    <p>24</p>
    <p>Agra</p>
</article> 
*/

const container = document.querySelector(".container");

container.append(article);

const article2 = document.createElement("article");

article2.classList.add("card");

// <h5>Utkarsh</h5>
const name2 = document.createElement("h5");

name2.innerHTML = "Raja";

//<p>24</p>
const age2 = document.createElement("p");

age2.innerHTML = 24;

// <p>Agra</p>
const city2 = document.createElement("p");

city2.innerHTML = "Amritsar";

article2.append(name2);
article2.append(age2);
article2.append(city2);

container.prepend(article2);

const students = [
  {
    name: "Ramesh",
    age: 32,
    city: "Banaras",
  },
  {
    name: "Visvanathan",
    age: 23,
    city: "Hyderabd",
  },
  {
    name: "Muneera",
    age: 23,
    city: "Combiatore",
  },
  {
    name: "Venkatesh",
    age: 24,
    city: "Vizag",
  },
];

function createList() {
  const listContainer = document.createElement("section");
  for (let i = 0; i < students.length; i++) {
    const card = createCard(students[i]);
    listContainer.append(card)
  }
  const body = document.querySelector('body');
  body.append(listContainer)
}

function createCard(studentInfo) {
  const article = document.createElement("article");

  article.classList.add("card");

  const name = document.createElement("h5");

  name.innerHTML = studentInfo.name ;

  const age = document.createElement("p");

  age.innerHTML = studentInfo.age ;

  const city = document.createElement("p");

  city.innerHTML = studentInfo.city ;

  article.append(name);
  article.append(age);
  article.append(city);


  return article;
}


createList()

const body = document.querySelector('body');
body.removeChild(container)
