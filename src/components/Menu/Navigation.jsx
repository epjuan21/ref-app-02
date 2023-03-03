import React from 'react'
import MenuItem from './MenuItem'
import list from '../../lists'

const Navigation = () => {
    return (
        <nav className='pt-7'>
            <ul className='text-sm'>
                {
                    list.map(item => (
                        <MenuItem
                            key={item.title}
                            link={item.link}
                            icon={item.icon}
                            title={item.title}
                        />
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navigation
