import jwt from "jsonwebtoken"

export default defineEventHandler(async(event)=>{
    try{
        const token = getCookie(event, "token") as string
        const user = jwt.verify(token, "secret")
        if(user){
            setCookie(event, "token", "", {expires: new Date(0)})
            return{
                statusCode: 200,
                message: "Logged out"
            }
        }
    } catch(e){
        console.error(e)
        return {
            message: "Error: " + e,
            statusCode: 500,
        };
    }
})