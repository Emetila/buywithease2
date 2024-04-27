import React from 'react';
import '../../App.css';
import { HomePage } from '../Landing';
import { ProductPage } from '../Product';

export default function AllPages() {
  return (
    <div>
      <HomePage />
      <ProductPage />
    </div>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
