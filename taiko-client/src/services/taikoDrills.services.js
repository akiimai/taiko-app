import axios from 'axios'

const insertById = (data) => {
    const promise = axios.get("/api/taiko-drills", data)
        .then(responseSuccess)
        .catch(responseError)
    return promise 
}

const responseSuccess = response => {
    console.log(response)
    return response.data
}

const responseError = error => {
    
}

module.export = { insertById }
