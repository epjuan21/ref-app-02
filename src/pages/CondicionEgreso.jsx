import { faBed } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { getCondicionyDestinoUsuarioEgreso } from '../api'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

const CondicionEgreso = () => {

    const [search, setSearch] = useState('')
    const [condicionEgreso, setCondicionEgreso] = useState([])

    useEffect(() => {
        getCondicionyDestinoUsuarioEgreso()
            .then((data) => {
                setCondicionEgreso(data)
            }).catch(err => {
                console.error(err);
            });
    }, [search])

    const filteredCondicionyDestinoUsuarioEgreso = condicionEgreso.filter(collection => {
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
                icon={faBed}
                title="Condicion y Destino Usuario Egreso"
                description="TTabla de Referencia CondicionyDestinoUsuarioEgreso de SISPRO"
                updateDate="2022-06-16"
                numberRegisters="7"
            />

            <SearchBar
                value={search}
                handleChange={handleSearch}
            />

            {filteredCondicionyDestinoUsuarioEgreso.map(collection => (
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
                            <p className='text-xs'>Urgencias: <span>{collection["Extra_III:Urgencias"]}</span></p>
                        </div>
                        <div>
                            <p className='text-xs'>Hospitalización: <span>{collection["Extra_IV:Hospitalizacion"]}</span></p>
                        </div>
                        <div>
                            <p className='text-xs'>Recien Nacidos: <span>{collection["Extra_V:RNacidos"]}</span></p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CondicionEgreso
