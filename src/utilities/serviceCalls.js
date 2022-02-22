import axios from 'axios';
// axios.defaults.baseURL = http://wwww.example.com
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