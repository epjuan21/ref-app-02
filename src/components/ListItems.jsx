import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const ListItems = ({ title, description, applications, icon, bgColor, textColor, link }) => {

    return (
        <Link
            to={link}
            className='flex items-center bg-white px-4 py-3 rounded-md mb-2 border hover:border-2 hover:border-blue-500 hover:shadow-md transition-all'
        >
            <div className={`${bgColor} py-2 px-3 rounded-md ${textColor}`}>
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className='ml-4'>
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
