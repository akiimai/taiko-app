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

const readByDrillId = (id) => {
    return axios.get("/api/taiko-drills/" + id)
        .then(responseSuccess)
        .catch(responseError)
}

const post = data => {
    debugger
    return axios.post("/api/taiko-drills", data)
        .then(responseSuccess)
        .catch(responseError)
}

const updateById = data => {
    return axios.put("/api/taiko-drills/" + data.id, data)
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

export { readRandom, readAll, readByDrillId, post, updateById, deleteById }