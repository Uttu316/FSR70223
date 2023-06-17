import axios from "axios"
import END_POINTS from "../apis/endpoints"



export const getProductInfo =(productId)=>{
    if(!productId) throw new Error('Invalid user id')

    const url =  `${END_POINTS.get_product_info}/${productId}`
    return axios.get(url)
}