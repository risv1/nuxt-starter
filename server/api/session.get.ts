import jwt from 'jsonwebtoken'
import { config } from 'dotenv'

type UserPayload = {
    name: string,
    email: string,
}

config()

export default defineEventHandler(async(event)=>{
    try{
    const token = getCookie(event, 'token') as string
    if(!token) {
        return {status: 401, body: 'Unauthorized'}
    }

    const data = jwt.verify(token, process.env.JWT_SECRET!) as UserPayload
    if(!data) {
        return {status: 401, body: 'Unauthorized'}
    }

    return {status: 200, user: {
        name: data.name,
        email: data.email,
    }}
} catch(e) {
    return {status: 500, message: e}
}
})