import { faPaperPlane, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faArrowCircleRight, faBookMedical, faUser, faBuilding, faCapsules, faDisease, faEarthAmericas, faFileMedical, faList, faListDots, faMap, faMattressPillow, faMountainSun, faPeopleGroup, faUsers, faVirus, faHouseMedical, faGroupArrowsRotate, faBed, faBuildingShield, faBuildingUser, faPerson } from '@fortawesome/free-solid-svg-icons';

const list = [
    {
        title: "Medicamentos",
        description: "Listado de Medicamentos Publicados por el INVIMA",
        icon: faCapsules,
        iconBgColor: 'bg-rose-50',
        iconTextColor: 'text-rose-600',
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['INVIMA'],
        link: '/medicamentos'
    },
    {
        title: "CUPS",
        description: "Codigos CUPS",
        icon: faList,
        iconBgColor: 'bg-blue-50',
        iconTextColor: 'text-blue-600',
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/cups'
    },
    {
        title: "CIE10",
        description: "Codigos CIE10",
        icon: faVirus,
        iconBgColor: 'bg-green-50',
        iconTextColor: 'text-green-600',
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/cie'
    },
    {
        title: "TipoId",
        description: "Tipos de Identificación",
        icon: faUser,
        iconBgColor: 'bg-slate-50',
        iconTextColor: 'text-slate-600',
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/tipoid'
    },
    {
        title: "Zona",
        description: "Zona Versión 2",
        icon: faBuilding,
        iconBgColor: 'bg-neutral-50',
        iconTextColor: 'text-neutral-600',
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/zona'
    },
    {
        title: "Via Ingreso",
        description: "Via Ingreso Usuario",
        icon: faArrowCircleRight,
        iconBgColor: 'bg-stone-50',
        iconTextColor: 'text-stone-600',
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/via'
    },
    {
        title: "Tipo Nota",
        description: "Tipo Nota",
        icon: faPaperPlane,
        iconBgColor: 'bg-gray-50',
        iconTextColor: 'text-gray-600',
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/tiponota'
    },
    {
        title: "Tipo Medicamento POS",
        description: "Tipo Medicamento POS Versión 2",
        icon: faMattressPillow,
        iconBgColor: 'bg-pink-50',
        iconTextColor: 'text-pink-600',
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/tipomedicamentopos'
    },
    {
        title: "Sexo",
        description: "Sexo",
        icon: faPeopleGroup,
        iconBgColor: 'bg-indigo-50',
        iconTextColor: 'text-indigo-600',
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/sexo'
    },
    {
        title: "Servicios",
        description: "Servicios",
        icon: faListDots,
        iconBgColor: 'bg-orange-50',
        iconTextColor: 'text-orange-600',
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/servicios'
    },
    {
        title: "Tipo Usuario",
        description: "Tipo Usuario Versión 2",
        icon: faUsers,
        iconBgColor: 'bg-teal-50',
        iconTextColor: 'text-teal-600',
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/tipousuario'
    },
    {
        title: "Tipo Diagnóstico Principal",
        description: "Tipo Diagnóstico Principal Versión 2",
        icon: faDisease,
        iconBgColor: 'bg-violet-50',
        iconTextColor: 'text-violet-600',
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/tipodiagnosticoppal'
    },
    {
        title: "Finalidad Consulta",
        description: "Finalidad Consulta Versión 2",
        icon: faBookMedical,
        iconBgColor: 'bg-sky-50',
        iconTextColor: 'text-sky-600',
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/finalidad'
    },
    {
        title: "Causa Externa",
        description: "Causa Externa Versión 2",
        icon: faFileMedical,
        iconBgColor: 'bg-cyan-50',
        iconTextColor: 'text-cyan-600',
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/causa'
    },
    {
        title: "Pais",
        description: "Listado Paises",
        icon: faEarthAmericas,
        iconBgColor: 'bg-amber-50',
        iconTextColor: 'text-amber-600',
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/pais'
    },
    {
        title: "Municipio",
        description: "Listado Municipios de Colombia",
        icon: faMountainSun,
        iconBgColor: 'bg-yellow-50',
        iconTextColor: 'text-yellow-600',
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/municipio'
    },
    {
        title: "Departamento",
        description: "Listado Departamentos de Colombia",
        icon: faMap,
        iconBgColor: 'bg-lime-50',
        iconTextColor: 'text-lime-600',
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/departamento'
    },
    {
        title: "Modalidad",
        description: "Modalidad Atención",
        icon: faHouseMedical,
        iconBgColor: 'bg-fuchsia-50',
        iconTextColor: 'text-fuchsia-600',
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/modalidad'
    },
    {
        title: "Lista Si No",
        description: "Lista Opciones Si / No",
        icon: faThumbsUp,
        iconBgColor: 'bg-purple-50',
        iconTextColor: 'text-purple-600',
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/lstsino'
    },
    {
        title: "Grupo Servicios",
        description: "Lista Grupo Servicios",
        icon: faGroupArrowsRotate,
        iconBgColor: 'bg-teal-50',
        iconTextColor: 'text-teal-600',
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/gruposervicios'
    },
    {
        title: "Condicion y Destino Usuario Egreso",
        description: "Lista Condicion y Destino Usuario Egreso",
        icon: faBed,
        iconBgColor: 'bg-red-50',
        iconTextColor: 'text-red-600',
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/condicionegreso'
    },
    {
        title: "Código EAPB y Nit",
        description: "Lista Códigos EAPB y NIT",
        icon: faBuildingUser,
        iconBgColor: 'bg-emerald-50',
        iconTextColor: 'text-emerald-600',
        bgColor: 'bg-zinc-100',
        textColor: 'text-zinc-600',
        applications: ['RIPS'],
        link: '/eapb'
    }
]

export default list;