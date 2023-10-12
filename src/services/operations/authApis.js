import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";


export const login = async (email , password ) => {
    try {
        const login = await apiConnector("POST" , endpoints.LOGIN_API , {
          email , password
        });
     console.log(login.data , "response")
    } catch (error) {
        console.log(error)
    }
}