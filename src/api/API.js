import axios from "axios";

const url = "http://localhost:8080";

export const listing = async() => {

    const res = await axios.get(`${url}/home`);
    return res.data; 

}


export const viewing = async(id) => {

    const res = await axios.get(`${url}/${id}`);

    return res.data; 

}

export const adding = async(book) => {

    const res = await axios.post(`${url}/send`, book);

    return res.data; 

}