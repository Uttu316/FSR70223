const BASE_URL = "https://jsonplaceholder.typicode.com";

const endpoints = {
    todos:"/todos"
}


function getTodos() {
  // make api call to server
  // show list on UI

  fetch(BASE_URL+endpoints.todos)
    .then(function (res) {
      return res.json(); //  it returns promise with response data
    })
    .then(function(data){
        console.log(data)
        createList(data)
    });
}


function addTodo(newData) {
    // send data to server 
    // handle the response
  
    fetch(BASE_URL+endpoints.todos,{
        method:'post',
        body:newData
    })
      .then(function (res) {
        return res.json(); //  it returns promise with response data
      })
      .then(function(data){
          console.log(data)
          createList(data)
      });
  }


function createList(list=[]){
    const ul = document.createElement('ul');

    list.forEach(function(item){
        const li = document.createElement('li');
        li.innerHTML = item.title
        ul.append(li)
    })

    const container = document.getElementById('list-container');

    container.append(ul)

}

getTodos();



