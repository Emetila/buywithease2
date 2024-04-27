import './App.css';
import { RoutesPage } from '../routes';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { HeaderNavigation } from './components/Header/HeaderNavigation';
import { HomePage } from './pages/Landing';
import { ProductPage } from './pages/Product';

export function App() {
  return (
    <div>
      <RoutesPage />
    </div>
  );
}

export default App;
