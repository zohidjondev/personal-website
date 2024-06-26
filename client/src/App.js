import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Register from "./pages/Register";
import AboutMe from "./pages/AboutMe";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import NotFoundPage from "./pages/NotFoundPage";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Write from "./pages/Write";

import BlogNavbar from "./components/BlogNavbar";
import HomeNavbar from "./components/HomeNavbar";
import Footer from "./components/Footer";

import "./style.scss"

const HomeLayout = () => {
  return (
    <>
      <HomeNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

const BlogLayout = () => {
  return (
    <>
      <BlogNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/blog",
    element: <BlogLayout />,
    children: [
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/post/:id",
        element: <Single />,
      },
      {
        path: "/blog/write",
        element: <Write />,
      },
    ],
  },
  {
    path: "/aboutme",
    element: <AboutMe />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
