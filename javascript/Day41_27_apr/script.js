const BASE_URL = "https://jsonplaceholder.typicode.com";

const endpoints = {
  todos: "/todos",
};

function getTodos() {
  const request = new XMLHttpRequest();
  request.open("GET", BASE_URL + endpoints.todos, true);
  request.send();
  startLoader()
  request.onreadystatechange = function () {
    if (this.readyState === 3) {
      //request is loading
      // start loader
    } else if (this.readyState === 4) {
        stopLoader()
      // request is complete
      const { status,response } = this;
      if (status === 200) {
        // response successful
        const data = JSON.parse(response);
        createList(data)
      } else if (status === 401) {
        // unautorized
      } else {
        // Something went wrong, Please try later
        showToast('Something went wrong, Please try later')
      }
    }
  };
}

function addTodos(newData) {
    const request = new XMLHttpRequest();
    request.open("POST", BASE_URL + endpoints.todos, true);
    request.send(JSON.stringify(newData)); // JSON data to send
    startLoader()
    request.onreadystatechange = function () {
      if (this.readyState === 3) {
        //request is loading
        // start loader
      } else if (this.readyState === 4) {
          stopLoader()
        // request is complete
        const { status,response } = this;
        if (status === 200) {
          // response successful
          const data = JSON.parse(response);
          createList(data)
        } else {
          // Something went wrong, Please try later
          showToast('Something went wrong, Please try later')
        }
      }
    };
  }

function startLoader(){
    const loader = document.getElementById('loader');
    loader.classList.replace('d-none','d-flex')
}

function stopLoader(){
    const loader = document.getElementById('loader');
    loader.classList.replace('d-flex','d-none')
}

function showToast(msg){
    const toast = document.getElementById('toast-container');
    toast.classList.replace('d-none','d-flex');

    const toastBody = document.querySelector('#toast-container .toast-body');

    toastBody.innerHTML = msg

    setTimeout(()=>{
        toast.classList.replace('d-flex','d-none');
    },3000)
}

function createList(list=[]){
    const ul = document.createElement('ul');

    list.forEach(function(item){
        const card = createCard(item);
       
        ul.append(card)
    })

    const container = document.getElementById('list-container');

    container.append(ul)

}

function createCard(item){
  const li = document.createElement('li');
  li.innerHTML = item.title
  return li
}

getTodos()
