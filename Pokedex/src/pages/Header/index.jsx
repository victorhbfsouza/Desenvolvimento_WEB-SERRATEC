import { Outlet } from 'react-router-dom';

export function Header() {
    return (
        <>
            <h1>Eu sou um header</h1>
            <Outlet />
        </>
    )
}