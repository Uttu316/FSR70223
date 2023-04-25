const obj = {
    name:'Ajay',
    age:24
  }
  
  
  const strObj = JSON.stringify(obj)
  
  console.log(strObj)
  localStorage.setItem('user',strObj)
  
  
  
  const userInfo = JSON.parse(localStorage.getItem('user'));
  localStorage.removeItem('user')
  console.log(userInfo)
  
  localStorage.clear()
  
  
  
  

  const ul = document.createElement('ul');

ul.classList.add('list');


const names = ['Ajay','Vijay','Simran',"Sneha"];

names.forEach((i)=>{
    
  const li = document.createElement('li');
   
  li.innerHTML = i;
  
  ul.append(li)
})

const container = document.querySelector('#container')

container.append(ul);


const btn = document.querySelector('.btn')

btn.addEventListener('click',function(e){
  console.log(e)
  const li = document.createElement('li');
   
  li.innerHTML = "Happy";
  
  const container = document.querySelector('#container ul')
  
  container.append(li)

})


window.addEventListener('load',function(e){
    console.log('Doument Ready')
})
