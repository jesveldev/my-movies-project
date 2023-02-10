import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, useRouteError, Link } from "react-router-dom";
import Login from './views/Login';
import Signup from './views/Signup';
import Error from './views/Error';
import Dashboard from './views/Dashboard';
import './index.css';

const Router = createBrowserRouter([
	{	
		path:'/',
		element:<Login />,
		errorElement:<Error />
	},
	{	
		path:'/sign-up',
		element:<Signup />,
		errorElement:<Error />,
		children: [
			{
				path:'prueba/',
				element:<p>HOLA MUNDO</p>
			}
		]
	},
	{	
		path:'/dashboard',
		element: <Dashboard />,
		errorElement: <Error />
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  	<RouterProvider router={Router}/>
  </React.StrictMode>
);
