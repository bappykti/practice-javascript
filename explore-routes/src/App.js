import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import MainLayout from './Layout/MainLayout';
import Friends from './components/Friends/Friends';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDeatils/PostDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', 
      element: <MainLayout></MainLayout>,
      children:[
        {path: '/', element: <Home></Home>},
        {path: '/home', element: <Home></Home>},
        {path: '/products', element: <Products></Products>},
        {
          path: '/friends',
          loader: () => {
            return fetch('https://jsonplaceholder.typicode.com/users');
          },
          element: <Friends></Friends>},
          {
            path: '/friend/:friendId',
            loader: async ({params}) => {
              // console.log(params);
              return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`);
            }, 
            element: <FriendDetails></FriendDetails>
          },
          {
            path: '/posts',
            loader: async ()=> {
              return fetch(`https://jsonplaceholder.typicode.com/posts`);
            },
            element: <Posts></Posts>
          },
          {
            path: '/post/:postId',
            loader: async({params})=>{
              return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
            },
            element: <PostDetails></PostDetails>
          }
    ] 
  },
    {path: '/about', element: <About></About>},
    
    {path: '/*', element: <h3>This Route iS not Found !!!! 404</h3>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
