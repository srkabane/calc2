import '@mantine/core/styles.css';  // Mantine styles should be first
import { MantineProvider } from '@mantine/core';  // MantineProvider import should come before router imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom';  // Router imports should come after Mantine

import Home from '@/screens/home';
import Welcome from '@/screens/welcome';

import '@/index.css';  // Global styles can come last

const paths = [
    {
        path: '/',
        element: <Welcome />,
    },
    {
        path: '/draw',
        element: <Home />,
    },
];

const BrowserRouter = createBrowserRouter(paths);

const App = () => {
    return (
        <MantineProvider>
            <RouterProvider router={BrowserRouter} />
        </MantineProvider>
    );
};

export default App;
