import './App.css';
import { RoutesPage } from '../routes';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { HeaderNavigation } from './components/Header/HeaderNavigation';
import { HomePage } from './pages/Landing';
  import AllPages from './pages/AllPages';

export function App() {
  const isLogin = new URLSearchParams(window.location.search)
    if (isLogin.get('status') === 'home') {
      return (<AllPages />)
    }
  return (
    <div>
      <RoutesPage />
    </div>
  );
}

export default App;
