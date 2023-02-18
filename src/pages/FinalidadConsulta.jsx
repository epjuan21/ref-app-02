import { faBookMedical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { getFinalidadConsultaVersion2 } from '../api'
import SearchBar from '../components/SearchBar'

const FinalidadConsulta = () => {

    const [search, setSearch] = useState('')
    const [finalidadConsulta, setFinalidadConsulta] = useState([])

    useEffect(() => {
        getFinalidadConsultaVersion2()
            .then((data) => {
                setFinalidadConsulta(data)
            }).catch(err => {
                console.error(err);
            });
    }, [search])

    const filteredFinalidadConsulta = finalidadConsulta.filter(collection => {
        const lowerCaseSearch = search.toLowerCase();
        return (
            collection.Codigo.toLowerCase().includes(lowerCaseSearch) ||
            collection.Nombre.toLowerCase().includes(lowerCaseSearch)
        );
    });

    const handleSearch = event => {
        setSearch(event.target.value);
    };

    return (
        <div>
            <div className='mb-6 flex items-center border-b pb-4'>
                <div className={`py-3 px-3 mr-4 bg-yellow-100 text-yellow-600 rounded-md`}>
                    <FontAwesomeIcon icon={faBookMedical} size="xl" />
                </div>
                <div>
                    <h1 className='text-xl font-semibold text-slate-800'>Finalidad Consulta</h1>
                    <span className='text-sm font-medium text-slate-500'>Tabla de Referencia RIPSFinalidadConsultaVersion2 de SISPRO</span>
                </div>
            </div>

            <div className='flex justify-between mb-6 border border-slate-200 p-4 rounded-md bg-slate-100'>
                <p className='text-sm font-semibold text-slate-600'>Fecha Actualización: <span>2022-10-31</span></p>
                <p className='text-sm font-semibold text-slate-600'>Total Registros: <span>34</span></p>
            </div>

            <SearchBar
                value={search}
                handleChange={handleSearch}
            />

            {filteredFinalidadConsulta.map(collection => (
                <div
                    className='flex justify-between items-center border rounded bg-white border-indigo-200 mt-2 py-1 px-4'
                    key={collection._id}
                >
                    <div className='flex py-2'>
                        <div className='mr-2 font-semibold'>{collection.Codigo}</div>
                        <div>{collection.Nombre}</div>
                    </div>
                    <div>
                        <div>
                            <p className='text-xs'>Consultas: <span>{collection["Extra_I:Consultas"]}</span></p>
                        </div>
                        <div>
                            <p className='text-xs'>Procedimientos: <span>{collection["Extra_II:Procedimientos"]}</span></p>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default FinalidadConsulta
