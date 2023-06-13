import axios from "axios";

const fakeStore = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 6000,
  headers: {
    name: "eStore",
  },
});

const typicode = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    name: "eStore",
  },
});




// axios.interceptors.request.use(function (req) {
//     console.log('I am a middleware',req)
//     req.headers = {
//         ...req.headers,
//         companyName:"eStore pvt ltd"
//     }
//     return req;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });


export { fakeStore, typicode };
