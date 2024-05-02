import './App.css';
import { RoutesPage } from '../routes';
  import AllPages from './pages/AllPages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

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
