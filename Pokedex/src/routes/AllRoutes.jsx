import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../common/components/Header';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { NotFound } from '../pages/NotFound';

export function AllRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={Header}>
                    <Route Component={Home} path="/" />
                    <Route Component={Login} path="/login" />
                    
                    <Route Component={NotFound} path="*" />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}