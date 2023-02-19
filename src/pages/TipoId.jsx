import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { getTipoId } from '../api'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

const TipoId = () => {

    const [search, setSearch] = useState('')
    const [tiposId, setTiposId] = useState([])

    useEffect(() => {
        getTipoId()
            .then((data) => {
                setTiposId(data)
            }).catch(err => {
                console.error(err);
            });
    }, [search])

    const filteredTiposId = tiposId.filter(collection => {
        const lowerCaseSearchTerm = search.toLowerCase();
        return (
            collection.Codigo.toLowerCase().includes(lowerCaseSearchTerm) ||
            collection.Nombre.toLowerCase().includes(lowerCaseSearchTerm)
        );
    });

    const handleSearch = event => {
        setSearch(event.target.value);
    };
    return (
        <>
            <Header
                icon={faUser}
                title="Tipo Id"
                description="Tabla de Referencia TipoIdPISIS de SISPRO"
                updateDate="2021-09-29"
                numberRegisters="16"
            />

            <SearchBar
                value={search}
                handleChange={handleSearch}
            />

            {filteredTiposId.map(collection => (
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

export default TipoId
