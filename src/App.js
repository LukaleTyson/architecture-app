import Home from "./pages/home/Home";
import Projects  from "./pages/projects/Projects";
import About  from "./pages/about/About";
import './app.scss';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Services from "./pages/services/Services";
import Development from "./pages/services/development/Development";
import Maintenance from "./pages/services/maintenance/Maintenance";



function App() {

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  }

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
          {
          path: "/projects",
          element: <Projects />,
        },
          {
          path: "/services",
          element: <Services />,
        },
          {
          path: "/services/development",
          element: <Development />,
        },
          {
          path: "/services/maintenance",
          element: <Maintenance />,
        },

          
    ]
  },

]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
