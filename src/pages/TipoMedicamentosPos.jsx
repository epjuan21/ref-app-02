import { faChevronRight, faHome, faMattressPillow } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { getDataFromMongo } from '../api'
import Breadcrumbs from '../components/Breadcrumbs'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

const TipoMedicamentosPos = () => {

    const [search, setSearch] = useState('')
    const [tipoMedicamentoPos, setTipoMedicamentoPos] = useState([])

    useEffect(() => {
        getDataFromMongo('tipomedicamentopos')
            .then((data) => {
                setTipoMedicamentoPos(data)
            }).catch(err => {
                console.error(err);
            });
    }, [search])

    const filteredtipoMedicamentoPos = tipoMedicamentoPos.filter(collection => {
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
            label: 'Tipo Medicamento Pos',
            icon: faChevronRight
        }
    ]

    return (
        <>
            <Breadcrumbs items={items}/>

            <Header
                icon={faMattressPillow}
                iconBgColor={'bg-pink-50'}
                iconTextColor={'text-pink-600'}
                title="Tipo Medicamento POS"
                description="Tabla de Referencia TipoMedicamentoPOSVersion2 de SISPRO"
                updateDate="2022-06-16"
                numberRegisters="4"
            />

            <SearchBar
                value={search}
                handleChange={handleSearch}
            />

            {filteredtipoMedicamentoPos.map(collection => (
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

export default TipoMedicamentosPos
