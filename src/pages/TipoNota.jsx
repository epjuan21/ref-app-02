import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { getTipoNota } from '../api'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

const TipoNota = () => {

    const [search, setSearch] = useState('')
    const [tipoNota, setTipoNota] = useState([])

    useEffect(() => {
        getTipoNota()
            .then((data) => {
                setTipoNota(data)
            }).catch(err => {
                console.error(err);
            });
    }, [search])

    const filtereTipoNota = tipoNota.filter(collection => {
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
        <>
            <Header
                icon={faPaperPlane}
                title="Tipo Nota"
                description="Tabla de Referencia TipoNota de SISPRO"
                updateDate="2022-06-16"
                numberRegisters="3"
            />

            <SearchBar
                value={search}
                handleChange={handleSearch}
            />

            {filtereTipoNota.map(collection => (
                <div
                    className='border rounded bg-white border-indigo-200 mt-2 py-1 px-4'
                    key={collection._id}
                >
                    <div className='flex py-2'>
                        <div className='mr-2 font-semibold'>{collection.Codigo}</div>
                        <div>{collection.Nombre}</div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default TipoNota
