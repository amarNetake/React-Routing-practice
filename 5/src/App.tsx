import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import MockTest from "./components/MockTest";
import Reports from "./components/Reports";
import User from "./components/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/home",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: "/contacts",
    element: (
      <>
        <Navbar />
        <Contacts />
      </>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <>
        <Navbar />
        <Dashboard />
      </>
    ),
    children: [
      {
        path: 'courses',
        element: <Courses/>
      },
      {
        path: 'mock-test',
        element: <MockTest/>
      },
      {
        path: 'reports',
        element: <Reports/>
      }
    ]
  },
  {
    path: "/user",
    element: <User/>
  },
  {
    path: '/user/:id',
    element: <User/>
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
