import { Outlet, ScrollRestoration } from 'react-router';
import Navbar from '../components/Navbar';

export default function Layout() {
    return (
        <div className='container-xl'>
            <Navbar />
            <div className='p-4'>
                <Outlet />
            </div>
            <ScrollRestoration />
        </div>
    );
}
