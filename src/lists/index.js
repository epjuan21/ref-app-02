import { faPaperPlane, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faArrowCircleRight, faBookMedical, faBuilding, faCapsules, faDisease, faEarthAmericas, faFileMedical, faList, faListDots, faMap, faMattressPillow, faMountainSun, faPeopleGroup, faUsers, faVirus, faHouseMedical, faGroupArrowsRotate, faBed, faBuildingShield, faBuildingUser } from '@fortawesome/free-solid-svg-icons';

const list = [
    {
        title: "Medicamentos",
        description: "Listado de Medicamentos Publicados por el INVIMA",
        icon: faCapsules,
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['INVIMA'],
        link: '/medicamentos'
    },
    {
        title: "CUPS",
        description: "Codigos CUPS",
        icon: faList,
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/cups'
    },
    {
        title: "CIE10",
        description: "Codigos CIE10",
        icon: faVirus,
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/cie'
    },
    {
        title: "TipoId",
        description: "Tipos de Identificación",
        icon: faVirus,
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/tipoid'
    },
    {
        title: "Zona",
        description: "Zona Versión 2",
        icon: faBuilding,
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/zona'
    },
    {
        title: "Via Ingreso",
        description: "Via Ingreso Usuario",
        icon: faArrowCircleRight,
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/via'
    },
    {
        title: "Tipo Nota",
        description: "Tipo Nota",
        icon: faPaperPlane,
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/tiponota'
    },
    {
        title: "Tipo Medicamento POS",
        description: "Tipo Medicamento POS Versión 2",
        icon: faMattressPillow,
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/tipomedicamentopos'
    },
    {
        title: "Sexo",
        description: "Sexo",
        icon: faPeopleGroup,
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/tipomedicamentopos'
    },
    {
        title: "Servicios",
        description: "Servicios",
        icon: faListDots,
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/servicios'
    },
    {
        title: "Tipo Usuario",
        description: "Tipo Usuario Versión 2",
        icon: faUsers,
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/tipousuairo'
    },
    {
        title: "Tipo Diagnóstico Principal",
        description: "Tipo Diagnóstico Principal Versión 2",
        icon: faDisease,
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/tipodiagnosticoppal'
    },
    {
        title: "Finalidad Consulta",
        description: "Finalidad Consulta Versión 2",
        icon: faBookMedical,
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/finalidad'
    },
    {
        title: "Causa Externa",
        description: "Causa Externa Versión 2",
        icon: faFileMedical,
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/causa'
    },
    {
        title: "Pais",
        description: "Listado Paises",
        icon: faEarthAmericas,
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/pais'
    },
    {
        title: "Municipio",
        description: "Listado Municipios de Colombia",
        icon: faMountainSun,
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/municipio'
    },
    {
        title: "Departamento",
        description: "Listado Departamentos de Colombia",
        icon: faMap,
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/departamento'
    },
    {
        title: "Modalidad",
        description: "Modalidad Atención",
        icon: faHouseMedical,
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/modalidad'
    },
    {
        title: "Lista Si No",
        description: "Lista Opciones Si / No",
        icon: faThumbsUp,
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/lstsino'
    },
    {
        title: "Grupo Servicios",
        description: "Lista Grupo Servicios",
        icon: faGroupArrowsRotate,
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/gruposervicios'
    },
    {
        title: "Condicion y Destino Usuario Egreso",
        description: "Lista Condicion y Destino Usuario Egreso",
        icon: faBed,
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/condicionegreso'
    },
    {
        title: "Código EAPB y Nit",
        description: "Lista Códigos EAPB y NIT",
        icon: faBuildingUser,
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/eapb'
    }
]

export default list;