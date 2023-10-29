import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import BlogList from './components/BlogList';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='LoginPage' element={<LoginPage/>}/>
      <Route path='BlogList' element={<BlogList/>}/>
    </Route>
  )
)

// const router = createBrowserRouter‹
// createRoutesFromElements (
// <Route path='/' element={<Layout />}>
// «Route path=' element={<Home />} />
// kRoute path= 'about' element=(<About />} /
// </Route>

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
