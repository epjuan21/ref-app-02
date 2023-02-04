import axios from 'axios';

const apiDatosAbiertos = axios.create({
    baseURL: 'https://www.datos.gov.co'
})

export const getSocrataData = async (uuid, query) => {
    try {
        const { data } = await apiDatosAbiertos.get(`/resource/${uuid}.json?$limit=100&$q=${query}`)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getCups = async (query) => {
    let url = ''
    if (!query) {
        url = 'https://us-east-1.aws.data.mongodb-api.com/app/references-app-tyuix/endpoint/cups'
    } else {
        url = `https://us-east-1.aws.data.mongodb-api.com/app/references-app-tyuix/endpoint/searchCups?q=${query}`
    }

    try {
        const { data } = await axios.get(url)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getCie = async (query) => {
    let url = ''
    if (!query) {
        url = 'https://us-east-1.aws.data.mongodb-api.com/app/references-app-tyuix/endpoint/cie'
    } else {
        url = `https://us-east-1.aws.data.mongodb-api.com/app/references-app-tyuix/endpoint/searchCie?q=${query}`
    }

    try {
        const { data } = await axios.get(url)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getTipoId = async () => {

    const url = 'https://us-east-1.aws.data.mongodb-api.com/app/references-app-tyuix/endpoint/tipoid'
    try {
        const { data } = await axios.get(url)
        return data
    } catch (error) {
        console.log(error)
    }
}