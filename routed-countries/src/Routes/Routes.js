import { createBrowserRouter } from "react-router-dom";
import Countries from "../components/Countries/Countries";

export const routes = createBrowserRouter([
    
    {
        path: '/',
        loader: async () => {
            return fetch('https://restcountries.com/v3.1/all')
        },
        element: <Countries></Countries>
    }
]);
