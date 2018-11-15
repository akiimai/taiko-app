import axios from 'axios'

const readRandom = () => {
    return axios.get("/api/taiko-drills/generator")
        .then(responseSuccess)
        .catch(responseError)
}

const readAll = () => {
    return axios.get("/api/taiko-drills/generator/?all")
        .then(responseSuccess)
        .catch(responseError)
}

const post = data => {
    return axios.post("/api/taiko-drills", data)
        .then(responseSuccess)
        .catch(responseError)
}

const updateById = id => {
    return axios.put("/api/taiko-drills/" + id)
        .then(responseSuccess)
        .catch(responseError)
}

const deleteById = id => {
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

export { readRandom, readAll, post, updateById, deleteById }