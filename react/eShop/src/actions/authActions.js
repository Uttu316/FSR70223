import axios from "axios"
import END_POINTS from "../apis/endpoints"



export const login = (data)=>{
    return axios.post(END_POINTS.login,data)
}