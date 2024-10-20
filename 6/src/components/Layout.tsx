import Footer from './Footer'
import Navbar from './Navbar'
import { useOutlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='w-full min-h-screen bg-yellow-200'>
          <Navbar/>
          {
               useOutlet()
          }
          <div className='absolute w-full bottom-0'>
          <Footer/>
          </div>
    </div>
  )
}

export default Layout