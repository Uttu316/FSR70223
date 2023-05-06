const users = [
  {
    id: "dscdwe",
    name: "Utkarsh Gupta",
    age: 20,
    city: "Agra",
    email: "abcd@xyz.com",
  },
  {
    id: "dsc32dwe",
    name: "Ramesh Gupta",
    age: 17,
    city: "Agra",
    email: "abcd@xyz.com",
  },
  {
    id: "ds525cdwe",
    name: "Karishma Gupta",
    age: 18,
    city: "Agra",
    email: "abcd@xyz.com",
  },
  {
    id: "ds2341cdwe",
    name: "Sneha Gupta",
    age: 25,
    city: "Agra",
    email: "abcd@xyz.com",
  },
  {
    id: "dsc54342dwe",
    name: "Esha Gupta",
    age: 14,
    city: "Agra",
    email: "abcd@xyz.com",
  },
  {
    id: "123",
    name: "Mahesh Gupta",
    age: 26,
    city: "Agra",
    email: "abcd@xyz.com",
  },
];

$(() => {
    const path = location.pathname;
    const isHomePage = path.includes('index');
    const isUserPage = path.includes('user')
    if(isHomePage){
        createList()
    }
    else if(isUserPage){
        getUserInfo()
    }
   
});

const createList = () => {
    
  const validUsers = users.filter((userInfo) => userInfo.age >= 18);
  validUsers.forEach((userInfo)=>{
    const cardTemplate = getCardTemplate(userInfo);
    const card = $(cardTemplate); // Creating DOM Object
    const container =  $('.container') // searching for .container element;
    container.append(card)
  })
};

const getCardTemplate = (userInfo) => {
  const { name, age, id, email, city } = userInfo || {};
  return `
        <a href="/javascript/Day48_6_may/practice/user.html?user_id=${id}">
            <div data-id=${id} class="card">
                <p class="name">${name}</p>
                <p class="age">${age} yrs</p>
                <p class="city">${city}</p>
                <p class="email">${email}</p>
            </div>
        </a>
    `;
};


const getUserInfo = ()=>{
    const userId = getUserId()
    if(userId){
        const userInfo = findUser(userId)
        setUserInfo(userInfo)
    }
}

const getUserId =()=>{
    const search = location.search;
    const params  = new URLSearchParams(search)
    return params.get('user_id')
}
function findUser(userID){
    return users.find((i)=>i.id===userID)
}

const setUserInfo = (userInfo)=>{
    const userName = $('.user-card .name')
    const userEmail = $('.user-card .email')
    const userAge = $('.user-card .age')
    const userCity = $('.user-card .city')
    const {name,age,city,email} = userInfo||{}
    userName.html(name)
    userEmail.html(email)
    userAge.html(age)
    userCity.html(city)
}