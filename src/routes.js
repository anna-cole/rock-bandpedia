import App from "./pages/App";
import About from "./pages/About";
import Concerts from "./pages/Concerts";
import BandProfile from "./pages/BandProfile";
import ErrorPage from "./pages/ErrorPage";
  
const routes = [
  {
    path: "/",
    element: <App />,
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
    element: <BandProfile />,
    errorElement: <ErrorPage />
  }
];
  
export default routes;