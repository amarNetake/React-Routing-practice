import { useNavigate, useSearchParams } from "react-router-dom"


const UserDetails = () => {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  let id = searchParams.get("id");
  let name = searchParams.get("name");
  return (
    <div className="w-full items-center flex flex-col gap-3 mt-4">
          <h1 className="text-2xl font-bold">User Details:</h1>
          <p>User ID: {id}</p>
          <p>Username: {name}</p>
          <button onClick={()=>navigate(-1)} className="w-fit px-2 py-2 bg-red-300 rounded-md">Go back</button>
    </div>
  )
}

export default UserDetails