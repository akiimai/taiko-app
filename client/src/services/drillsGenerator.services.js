import axios from 'axios'

const readAll = () => {
    const url = "/api/taiko-drills/generator"
    const config = {
        method: "GET"
    }
    const promise = axios(url, config) 
        .then(responseSuccess)
        .catch(responseError)
    return promise 
}

const responseSuccess = response => {
    console.log(response)
    return response.data 
}

const responseError = error => {
    console.log(error)
}

export { readAll }