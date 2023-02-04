import { faCapsules, faList, faVirus } from '@fortawesome/free-solid-svg-icons';

const list = [
    {
        title: "Medicamentos",
        description: "Listado de Medicamentos Publicados por el INVIMA",
        icon: faCapsules,
        bgColor: 'bg-pink-100',
        textColor: 'text-pink-600',
        applications: ['INVIMA'],
        link: '/medicamentos'
    },
    {
        title: "CUPS",
        description: "Codigos CUPS",
        icon: faList,
        bgColor: 'bg-lime-100',
        textColor: 'text-lime-600',
        applications: ['RIPS'],
        link: '/cups'
    },
    {
        title: "CIE10",
        description: "Codigos CIE10",
        icon: faVirus,
        bgColor: 'bg-yellow-100',
        textColor: 'text-yellow-600',
        applications: ['RIPS'],
        link: '/cie'
    },
    ,
    {
        title: "TipoId",
        description: "Tipos de Identificación",
        icon: faVirus,
        bgColor: 'bg-yellow-100',
        textColor: 'text-yellow-600',
        applications: ['RIPS'],
        link: '/tipoid'
    }
]

export default list;