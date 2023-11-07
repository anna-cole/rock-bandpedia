import Home from "./pages/Home";
import About from "./pages/About";
import Concerts from "./pages/Concerts";
import Band from "./pages/Band";
import ErrorPage from "./pages/ErrorPage";
  
const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  }, 
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />
  },
  {
    path: "/concerts",
    element: <Concerts />,
    errorElement: <ErrorPage />
  },
  {
    path: "/band/:id",
    element: <Band />,
    errorElement: <ErrorPage />
  }
];
  
export default routes;