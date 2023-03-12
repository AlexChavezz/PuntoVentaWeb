import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AdminPage, AuthPage, VentasPage } from '../Pages';

export const AppRouter = () => {
    const authentication = {
        isAuthenticated: false,
        user: {
            name: 'Jorge',
            role: 'admin'
        }
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/admin' element={
                    authentication.isAuthenticated ?
                        (
                            authentication.user.role === 'admin' ? <AdminPage /> : <Navigate to={'/sales'} />
                        )
                        :
                        (
                            <Navigate to={'/auth'} />
                        )
                } />
                <Route path='/sales' element={
                    authentication.isAuthenticated ?
                        (
                            authentication.user.role === 'employed' ? <VentasPage /> : <Navigate to={'/admin'} />
                        )
                        :
                        (
                            <Navigate to={'/auth'} />
                        )
                } />
                <Route path='/auth' element={
                    authentication.isAuthenticated ?
                        (
                            <Navigate to={'/admin'} />
                        )
                        :
                        (
                           <AuthPage />
                        )
                } />
            </Routes>
        </BrowserRouter>
    );
}
