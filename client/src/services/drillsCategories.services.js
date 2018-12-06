import axios from 'axios'; 

const getDrillType = () => {
    return axios.get("/server.js/api/drill-type")
        .then(responseSuccess)
        .catch(responseError)
}

const responseSuccess = (response) => {
    console.log(response)
    return response.data
}

const responseError = (error) => {
    console.log(error)
}

export { getDrillType }