import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeScreen from './screens/HomeScreen.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouteProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route index={true} path='/' element={<HomeScreen />} /> 
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouteProvider router={router} />
  </React.StrictMode>,
)
