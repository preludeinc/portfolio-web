import { MantineProvider } from '@mantine/core';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Eng from './pages/Eng';
import Home from "./pages/Home";
import Games from "./pages/Games";
import Web from './pages/Web';
import '@mantine/core/styles.css';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/websites",
    element: <Web />
  },
  {
    path: "/games",
    element: <Games />
  },
  {
    path: "/engineering",
    element: <Eng />
  }
]);


const App = () => {
  return (
    <MantineProvider defaultColorScheme="auto">
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
