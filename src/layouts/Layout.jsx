import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Layout = () => {

    return (
        <div className='flex h-screen overflow-auto'>
            {/* Sidebar */}
            <Sidebar />
            {/* Content */}
            <div className='flex-1 overflow-y-auto'>
                <main className='p-7'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout
