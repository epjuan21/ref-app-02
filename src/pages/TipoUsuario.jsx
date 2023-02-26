import { faChevronRight, faHome, faUsers } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { getTipoUsuarioVersion2 } from '../api'
import Breadcrumbs from '../components/Breadcrumbs'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

const TipoUsuario = () => {

    const [search, setSearch] = useState('')
    const [tipoUsuario, setTipoUsuario] = useState([])

    useEffect(() => {
        getTipoUsuarioVersion2()
            .then((data) => {
                setTipoUsuario(data)
            }).catch(err => {
                console.error(err);
            });
    }, [search])

    const filteredTipoUsuario = tipoUsuario.filter(collection => {
        const lowerCaseSearch = search.toLowerCase();
        return (
            collection.Codigo.toLowerCase().includes(lowerCaseSearch) ||
            collection.Nombre.toLowerCase().includes(lowerCaseSearch)
        );
    });

    const handleSearch = event => {
        setSearch(event.target.value);
    };

    const items = [
        {
            label: 'Inicio',
            to: '/',
            icon: faHome
        },
        {
            label: 'Tipo Usuario',
            icon: faChevronRight
        }
    ]

    return (
        <>
            <Breadcrumbs items={items}/>

            <Header
                icon={faUsers}
                iconBgColor={'bg-teal-50'}
                iconTextColor={'text-teal-600'}
                title="Tipo Usuario"
                description="Tabla de Referencia RIPSTipoUsuarioVersion2 de SISPRO"
                updateDate="2022-06-16"
                numberRegisters="12"
            />

            <SearchBar
                value={search}
                handleChange={handleSearch}
            />

            {filteredTipoUsuario.map(collection => (
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

export default TipoUsuario
