import { NavLink, useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-2 items-center justify-center w-full h-screen">
      <h1 className="text-3xl font-bold">Welcome to home page</h1>
      
      <NavLink to="/user/1" className={(e)=>e.isActive?"bg-green-400":""}>Open user 1</NavLink>

      <NavLink to="/user/2" className={(e)=>e.isActive?"bg-green-400":""}>Open user 2</NavLink>
      
      <button onClick={()=>navigate("/user/3")} className="px-2 py-2 bg-pink-200">Open user 3</button>
      
      <button onClick={()=>navigate("/user?userId=4&name=Amar")} className="px-2 py-2 bg-pink-200">Open user 4</button>

    </div>
  )
}

export default Home