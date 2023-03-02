import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const ListItems = ({ title, description, applications, icon, iconBgColor, iconTextColor, bgColor, textColor, link }) => {

    return (
        <Link
            to={link}
            className='flex flex-col 2xl:flex-row items-start gap-y-2 gap-x-4 flex-wrap bg-white px-4 py-3 rounded-md mb-2 border hover:border hover:border-blue-500 transition-all overflow-hidden'
        >
            <div className={`${iconBgColor} flex h-12 w-12 items-center justify-center rounded-md ${iconTextColor}`}>
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className='ml-0'>
                <div className='mb-1'>
                    <span className='font-semibold tracking-wide'>{title}</span>
                    {applications?.map(applitation => (
                        <span key={applitation} className={`mx-3 text-xs font-semibold ${bgColor} ${textColor} py-1 px-2 rounded-md`}>{applitation}</span>
                    ))}
                </div>
                <p className='text-sm font-medium text-slate-500'>{description}</p>
            </div>
        </Link>
    )
}

export default ListItems
