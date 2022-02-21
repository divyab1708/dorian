import axios from 'axios';
const api = axios.create({ baseURL: 'http://localhost:3001' });
var util={
    post: (url, data)=>{
        return api.post(url,data)
    },
    get: (url, data)=>{
        return api.get(url,{params:data})
    }
}

export default util;