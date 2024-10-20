import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Contacts from './pages/Contacts.tsx'
import Layout from './components/Layout.tsx'
import Dashboard from './pages/Dashboard.tsx'
import UserDetails from './components/UserDetails.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      { index: true, element: <Home/> }, 
      //At max only one element can have index set to true meaning it is default page
      //Index route is rendered when the parent route is matched but no child routes are matched.
      //It does not have a path of its own.
      { path: 'home', element: <Home/> },
      { path: 'about', element: <About/> },
      { path: 'contacts', element: <Contacts/> },
      { path: 'dashboard', element: <Dashboard/>,
        children: [
          { path: 'user', element: <UserDetails/> },
        ]
      }
     ]
  },
  {
    path: '*',
    element: <h1>Page not found</h1>
  }
])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router = {router}/>
)
