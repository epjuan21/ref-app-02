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

    try {
        const { data } = await apiMongo.get('/tipoid')
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getZona = async () => {

    try {
        const { data } = await apiMongo.get('/zona')
        return data.result
    } catch (error) {
        console.log(error)
    }
}

export const getViaIngreso = async () => {

    try {
        const { data } = await apiMongo.get('/viaingreso')
        return data.result
    } catch (error) {
        console.log(error)
    }
}

export const getTipoNota = async () => {

    try {
        const { data } = await apiMongo.get('/tiponota')
        return data.result
    } catch (error) {
        console.log(error)
    }
}

export const getTipoMedicamentoPos = async () => {

    try {
        const { data } = await apiMongo.get('/tipomedicamentopos')
        return data.result
    } catch (error) {
        console.log(error)
    }
}

export const getSexo = async () => {

    try {
        const { data } = await apiMongo.get('/sexo')
        return data.result
    } catch (error) {
        console.log(error)
    }
}

export const getServicios = async () => {

    try {
        const { data } = await apiMongo.get('/servicios')
        return data.result
    } catch (error) {
        console.log(error)
    }
}

export const getTipoUsuarioVersion2 = async () => {

    try {
        const { data } = await apiMongo.get('/tipousuario')
        return data.result
    } catch (error) {
        console.log(error)
    }
}

export const getTipoDiagnosticoPrincipalVersion2 = async () => {

    try {
        const { data } = await apiMongo.get('/getipodiagnosticoprincipal')
        return data.result
    } catch (error) {
        console.log(error)
    }
}

export const getFinalidadConsultaVersion2 = async () => {

    try {
        const { data } = await apiMongo.get('/finalidadconsultaversion2')
        return data.result
    } catch (error) {
        console.log(error)
    }
}

export const getCausaExternaVersion2 = async () => {

    try {
        const { data } = await apiMongo.get('/causaexternaversion2')
        return data.result
    } catch (error) {
        console.log(error)
    }
}

export const getPais = async () => {

    try {
        const { data } = await apiMongo.get('/pais')
        return data.result
    } catch (error) {
        console.log(error)
    }
}

export const getDepartamento = async () => {

    try {
        const { data } = await apiMongo.get('/departamentos')
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getMunicipio = async () => {

    try {
        const { data } = await apiMongo.get('/municipio')
        return data.result
    } catch (error) {
        console.log(error)
    }
}

export const getModalidad = async () => {

    try {
        const { data } = await apiMongo.get('/modalidad')
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getLstSiNo = async () => {

    try {
        const { data } = await apiMongo.get('/lstsino')
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getGrupoServicios = async () => {

    try {
        const { data } = await apiMongo.get('/gruposervicios')
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getCondicionyDestinoUsuarioEgreso = async () => {

    try {
        const { data } = await apiMongo.get('/condicionegreso')
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getEapb = async () => {

    try {
        const { data } = await apiMongo.get('/eapb')
        return data.result
    } catch (error) {
        console.log(error)
    }
}