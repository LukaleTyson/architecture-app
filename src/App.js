import Home from "./pages/home/Home";
import Projects  from "./pages/projects/Projects";
import About  from "./pages/about/About";
import './app.scss';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";



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
