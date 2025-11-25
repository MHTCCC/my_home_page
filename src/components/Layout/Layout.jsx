import { Outlet, useLocation } from 'react-router';

const Layout = () => {
    return (
        <div>
            <main className='flex flex-col min-h-screen bg-gray-100'>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;