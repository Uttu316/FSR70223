
let arr = [1,2,3,4,5]
    
const newArray =  arr.map(function(ele,index){
    console.log(ele,index)
    if(ele%2==0){
       return ele+2  
    }
})


console.log(newArray)

/*

cd -> change directory

/documents
cd files

/files



ls -> list all files in current folder


pwd -> current directory

c://utkarshgupta/documents/files

d: // change drive to d

cd ..

touch filename.ext // create a file

 mkdir batch2023 // creates folder
 rmdir batch2023 // remove folder
 rm abc.html // remove file
*/