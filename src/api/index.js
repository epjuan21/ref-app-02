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

export const getZona = async () => {

    const url = 'https://us-east-1.aws.data.mongodb-api.com/app/references-app-tyuix/endpoint/zona'
    try {
        const { data } = await axios.get(url)
        return data.result
    } catch (error) {
        console.log(error)
    }
}

export const getViaIngreso = async () => {

    const url = 'https://us-east-1.aws.data.mongodb-api.com/app/references-app-tyuix/endpoint/viaingreso'
    try {
        const { data } = await axios.get(url)
        return data.result
    } catch (error) {
        console.log(error)
    }
}

export const getTipoNota = async () => {

    const url = 'https://us-east-1.aws.data.mongodb-api.com/app/references-app-tyuix/endpoint/tiponota'
    try {
        const { data } = await axios.get(url)
        return data.result
    } catch (error) {
        console.log(error)
    }
}

export const getTipoMedicamentoPos = async () => {

    const url = 'https://us-east-1.aws.data.mongodb-api.com/app/references-app-tyuix/endpoint/tipomedicamentopos'
    try {
        const { data } = await axios.get(url)
        return data.result
    } catch (error) {
        console.log(error)
    }
}

export const getSexo = async () => {

    const url = 'https://us-east-1.aws.data.mongodb-api.com/app/references-app-tyuix/endpoint/sexo'
    try {
        const { data } = await axios.get(url)
        return data.result
    } catch (error) {
        console.log(error)
    }
}

export const getServicios = async () => {

    const url = 'https://us-east-1.aws.data.mongodb-api.com/app/references-app-tyuix/endpoint/servicios'
    try {
        const { data } = await axios.get(url)
        return data.result
    } catch (error) {
        console.log(error)
    }
}

export const getTipoUsuarioVersion2 = async () => {

    const url = 'https://us-east-1.aws.data.mongodb-api.com/app/references-app-tyuix/endpoint/tipousuario'
    try {
        const { data } = await axios.get(url)
        return data.result
    } catch (error) {
        console.log(error)
    }
}

export const getTipoDiagnosticoPrincipalVersion2 = async () => {

    const url = 'https://us-east-1.aws.data.mongodb-api.com/app/references-app-tyuix/endpoint/getipodiagnosticoprincipal'
    try {
        const { data } = await axios.get(url)
        return data.result
    } catch (error) {
        console.log(error)
    }
}

export const getFinalidadConsultaVersion2 = async () => {

    const url = 'https://us-east-1.aws.data.mongodb-api.com/app/references-app-tyuix/endpoint/finalidadconsultaversion2'
    try {
        const { data } = await axios.get(url)
        return data.result
    } catch (error) {
        console.log(error)
    }
}

export const getCausaExternaVersion2 = async () => {

    const url = 'https://us-east-1.aws.data.mongodb-api.com/app/references-app-tyuix/endpoint/causaexternaversion2'
    try {
        const { data } = await axios.get(url)
        return data.result
    } catch (error) {
        console.log(error)
    }
}

export const getPais = async () => {

    const url = 'https://us-east-1.aws.data.mongodb-api.com/app/references-app-tyuix/endpoint/pais'
    try {
        const { data } = await axios.get(url)
        return data.result
    } catch (error) {
        console.log(error)
    }
}

export const getDepartamento = async () => {

    const url = 'https://us-east-1.aws.data.mongodb-api.com/app/references-app-tyuix/endpoint/departamentos'
    try {
        const { data } = await axios.get(url)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getMunicipio = async () => {

    const url = 'https://us-east-1.aws.data.mongodb-api.com/app/references-app-tyuix/endpoint/municipio'
    try {
        const { data } = await axios.get(url)
        return data.result
    } catch (error) {
        console.log(error)
    }
}

export const getModalidad = async () => {

    const url = 'https://us-east-1.aws.data.mongodb-api.com/app/references-app-tyuix/endpoint/modalidad'
    try {
        const { data } = await axios.get(url)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getLstSiNo = async () => {

    const url = 'https://us-east-1.aws.data.mongodb-api.com/app/references-app-tyuix/endpoint/lstsino'
    try {
        const { data } = await axios.get(url)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getGrupoServicios = async () => {

    const url = 'https://us-east-1.aws.data.mongodb-api.com/app/references-app-tyuix/endpoint/gruposervicios'
    try {
        const { data } = await axios.get(url)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getCondicionyDestinoUsuarioEgreso = async () => {

    const url = 'https://us-east-1.aws.data.mongodb-api.com/app/references-app-tyuix/endpoint/condicionegreso'
    try {
        const { data } = await axios.get(url)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getEapb = async () => {

    const url = 'https://us-east-1.aws.data.mongodb-api.com/app/references-app-tyuix/endpoint/eapb'
    try {
        const { data } = await axios.get(url)
        return data.result
    } catch (error) {
        console.log(error)
    }
}