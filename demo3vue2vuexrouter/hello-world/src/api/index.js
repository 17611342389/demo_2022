import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});

export const apiGet = (url) => {
    return new Promise((r) => {
        instance.get(url).then((response) => {
            r(response.data)
        })
    })
   
}