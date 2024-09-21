import About from './About/About';
import Portflio from './Portflio/imgs/Portflio';
import Contact from './Contact/Contact';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PageNotFound from './PageNotFound/PageNotFound';
import Layout from './Layout/Layout';
import Start from './Start/Start';
import './App.css'

function App() {
  let router = createBrowserRouter([
    {
      path: '',
      element: <Layout />,
      children: [
        { index:true, element: <Start /> },
        { path: 'about', element: <About /> },
        { path: 'portflio', element: <Portflio /> },
        { path: 'contact', element: <Contact /> },
        { path: '*', element: <PageNotFound /> },
      ],
    },
  ]);
  return (
    <>
    <RouterProvider router={router}></RouterProvider>

    </>
  );
}

export default App;
