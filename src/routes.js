import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { LoginPage } from './App/pages/Login'
import { HomePage } from './App/pages/Landing'
import { ProductPage } from './App/pages/Product'

export const RoutesPage = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element= {<LoginPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/product" element={<ProductPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}