import { Outlet, useNavigate } from "react-router-dom"


const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col gap-3 p-3">
     <h1 className='text-2xl font-bold p-4'>Welcome to dashboard page</h1>
     <button onClick={()=>navigate('user?id=1&name=Amar')} className="px-4 py-2 rounded-md bg-green-200 text-lg w-fit">User 1</button>
     <button onClick={()=>navigate('user?id=2&name=Karan')} className="px-4 py-2 rounded-md bg-green-200 text-lg w-fit">User 2</button>
     <button onClick={()=>navigate('user?id=3&name=Shikha')} className="px-4 py-2 rounded-md bg-green-200 text-lg w-fit">User 3</button>
     <button onClick={()=>navigate('user?id=4&name=Kavya')} className="px-4 py-2 rounded-md bg-green-200 text-lg w-fit">User 4</button>
     <Outlet/>
    </div>
  )
}

export default Dashboard