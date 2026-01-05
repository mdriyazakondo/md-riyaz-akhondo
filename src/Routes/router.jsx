import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Error from "../components/Error";
import Loading from "../pages/Loading";
import ProjectDetails from "../pages/ProjectDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error></Error>,
    hydrateFallbackElement: <Loading />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/project",
        element: <Projects />,
      },
      {
        path: "/project/:id",
        element: <ProjectDetails />,
        loader: ({ params }) => fetch(`/portfolio.json/${params.id}`),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
