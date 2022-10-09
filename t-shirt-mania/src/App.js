
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Products from './components/Products/Products';
import Grandpa from './components/Grandpa/Grandpa';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path:'/',
          loader: () => fetch('t-shirt.json'),
          element: <Home></Home>,
        },
        {
          path:'/orders',
          element: <Orders></Orders>,
        },
        {
          path:'/about',
          element: <About></About>,
        },
        {
          path:'/inventory',
          element: <Inventory></Inventory> ,
        },
        {
          path:'/products',
          element: <Products></Products>,
        },
        {
          path: '/grandpa',
          element: <Grandpa></Grandpa>
        }
      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
