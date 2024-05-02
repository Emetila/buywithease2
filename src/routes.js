import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { LoginPage } from './App/pages/Login'
import { HomePage } from './App/pages/Landing'
import { ProductPage } from './App/pages/Product'
import { SignUp } from './App/pages/Signup'
import About from './App/pages/About'

export const RoutesPage = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element= {<LoginPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/product" element={<ProductPage />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}