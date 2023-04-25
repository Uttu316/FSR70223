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
  
  
  
  