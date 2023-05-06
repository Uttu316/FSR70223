let students  = [
    {
      name:'Raja',
      age:24,
    },
    {
      name:'Ramesh',
      age:23,
    },
    {
      name:'Karishma',
      age:20,
    },
    {
      name:'Dhanshree',
      age:21,
    }
  ]
  
  
  var total = 0;
  const numberOfStudents = students.length;
  
  for(let i=0;i<numberOfStudents;i++){
    total+=students[i].age;
  }
  const average = total/numberOfStudents
  
  console.log(average)
  
  
  
  