import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { getTipoId } from '../api'
import SearchBar from '../components/SearchBar'
import { useDebounce } from '../hooks/useDebounce'

const TipoId = () => {

    const [search, setSearch] = useState('')
    const [tiposId, setTiposId] = useState([])
    const searchTerm = useDebounce(search, 1000)

    useEffect(() => {
        getTipoId()
            .then((data) => {
                setTiposId(data)
            }).catch(err => {
                console.error(err);
            });
    }, [searchTerm])

    const filteredTiposId = tiposId.filter(collection => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return (
            collection.Codigo.toLowerCase().includes(lowerCaseSearchTerm) ||
            collection.Nombre.toLowerCase().includes(lowerCaseSearchTerm)
        );
    });

    const handleSearch = event => {
        setSearch(event.target.value);
    };
    return (
        <div>
            <div className='mb-6 flex items-center'>
                <div className={`py-3 px-3 mr-4 bg-yellow-100 text-yellow-600 rounded-md`}>
                    <FontAwesomeIcon icon={faUser} size="xl" />
                </div>
                <div>
                    <h1 className='text-xl font-semibold text-slate-800'>Tipo Id</h1>
                    <span className='text-sm font-medium text-slate-500'>Tabla de Referencia TipoIdPISIS de SISPRO</span>
                </div>
            </div>

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
        </div>
    )
}

export default TipoId
