import { NavLink, Outlet } from "react-router-dom"


function Dashboard() {
  const linkStyle = " px-3 py-2 flex items-center justify-center rounded-md text-md font-medium";
  return (
    <div className="w-full flex flex-col gap-3">
          <h1 className="font-bold text-xl">Dashboard Page</h1>
          <nav className="flex flex-row gap-3 p-3">
               <NavLink className={(e)=>{
                    return (e.isActive ? "bg-red-200":"bg-blue-200") + linkStyle
               }} to="/dashboard/courses">Courses</NavLink>
               <NavLink className={(e)=>{
                    return (e.isActive ? "bg-red-200":"bg-blue-200") + linkStyle
               }} to="/dashboard/mock-test">Mock Tests</NavLink>
               <NavLink className={(e)=>{
                    return (e.isActive ? "bg-red-200":"bg-blue-200") + linkStyle
               }} to="/dashboard/reports">Reports</NavLink>
          </nav>
          <Outlet/>
    </div>
  )
}

export default Dashboard