import axios from "axios";


export const actionServer = {
    ADD_SERVER: "add_new_server",
    PRIVATE_MESSAGE: "private_message"
}

export const serverType = {
    FRIENDS: "friends",
    COMMUNITY: "community"
}


export const PUBLIC_API = axios.create({
    baseURL:"http://localhost:3000/",
    timeout: 1000
})