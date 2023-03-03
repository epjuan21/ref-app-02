import { Outlet } from 'react-router-dom'
import ButtonMenu from '../components/Menu/ButtonMenu'
import OffCanvasMenu from '../components/Menu/OffCanvasMenu'

const Layout = () => {

    return (
        <div className='flex h-screen overflow-auto'>
            {/* Sidebar */}
            <OffCanvasMenu />
            {/* Content */}
            <div className='flex-1 overflow-y-auto pl-16 '>
                <main className='p-7'>
                    <ButtonMenu />
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout
