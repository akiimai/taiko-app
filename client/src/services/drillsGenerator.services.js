import axios from 'axios'

const readRandom = () => {
    const url = "/api/taiko-drills/generator"
    const config = {
        method: "GET"
    }
    const promise = axios(url, config) 
        .then(responseSuccess)
        .catch(responseError)
    return promise 
}

const readAll = () => {
    const url = "/api/taiko-drills"
    const config = {
        method: "GET"
    }
    const promise = axios(url, config)
        .then(responseSuccess)
        .catch(responseError)
    return promise
}

const post = (data) => {
    debugger
    const url = "/api/taiko-drills"
    const config = {
        method: "POST",
        data: data
    }

    const promise = axios.post(url, config)
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

export { readRandom, readAll, post }