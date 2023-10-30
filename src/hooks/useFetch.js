import axios from "axios"
import { useState } from "react"

const useFetch = (baseUrl) => {

    const [infoApi, setInfoApi] = useState()
    const [statusAlert, setStatusAlert] = useState()

    // CREATE
    const postApi = (path, data) => {
        const url = `${baseUrl}${path}/`
        axios.post(url, data)
            .then(res => {
                console.log(res.data)
                setStatusAlert("create")
                setInfoApi([...infoApi, res.data])
            })
            .catch(err => console.log(err))

    }

    // READ
    const getApi = (path) => {
        const url = `${baseUrl}${path}/`
        axios.get(url)
            .then(res => setInfoApi(res.data))
            .catch(err => console.log(err))
        
    }

    // UPDATE
    const updateApi = (path, id, data) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.put(url, data)
            .then(res => {
                console.log(res.data)
                setStatusAlert("edit")
                setInfoApi(infoApi.map(e => e.id === id ? res.data[1][0] : e))
            })
            .catch(err => console.log(err))
        
    }

    // Delete
    const deleteApi = (path, id) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.delete(url)
            .then(res => {
                console.log(res.data)
                setStatusAlert("delete")
                setInfoApi(infoApi.filter(e => e.id !== id))
            })
            .catch(err => console.log(err))
        
    }

    return [infoApi, getApi, postApi, deleteApi, updateApi, statusAlert, setStatusAlert ]

}

export default useFetch