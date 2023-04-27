import axios from 'axios';

const apiDatosAbiertos = axios.create({
    baseURL: 'https://www.datos.gov.co'
})

const apiMongo = axios.create({
    baseURL: import.meta.env.VITE_MONGOAPP_URL
})

export const getSocrataData = async (uuid, query) => {
    try {
        const { data } = await apiDatosAbiertos.get(`/resource/${uuid}.json?$limit=100&$q=${query}`)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getSocrataDataV2 = async (uuid, searchValue) => {
    
    const value = searchValue?.toString();
    const limit = value ? 10 : 100;

    try {
        const { data } = await apiDatosAbiertos.get(`/resource/${uuid}.json${value ? `?$where=expediente like '%25${value}%25' or registrosanitario like '%25${value}%25'` : `?$limit=${limit}`}`);
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getDataFromMongo = async (endpoint, query = '') => {
    try {
        const { data } = await apiMongo.get(`/${endpoint}?q=${query}`)
        return data;
    } catch (error) {
        console.log(error)
    }
}