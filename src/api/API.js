import axios from "axios";

const url = "http://localhost:8080";

export const listing = async() => {

    const res = await axios.get(`${url}/home`);
    return res.data; 

}