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
    const url = "/api/taiko-drills/generator/?all"
    const config = {
        method: "GET"
    }
    const promise = axios(url, config)
        .then(responseSuccess)
        .catch(responseError)
    return promise
}

const post = (data) => {
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

const deleteById = (id) => {
    debugger
    return axios.delete("/api/taiko-drills/" + id)
        .then(responseSuccess)
        .catch(responseError)
}

const responseSuccess = response => {
    console.log(response)
    return response.data 
}

const responseError = error => {
    console.log(error)
}

export { readRandom, readAll, post, deleteById }