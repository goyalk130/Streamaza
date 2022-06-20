import axios from "axios"
import { api } from "./Constant";

export const CheckAuth = ()=>{
    var isAuth;
    // const dispatch = useDispatch();
    axios.get(`${api}/api/v1/logged`,{withCredentials:true}).then(res =>{
        // console.log(res);
        isAuth=true;
        console.log(isAuth)

     
    }).catch((err)=>{
        isAuth=false
    })
    return isAuth

    
}