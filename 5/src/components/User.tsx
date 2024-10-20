import React from 'react'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';

const User:React.FC = () => {
  const { id } = useParams(); //This helps to capture params if any. 
  const [ searchParams, setSearchParams] = useSearchParams(); //This helps to capture query parameters
  const location = useLocation(); //This gives the current route info
  const navigate = useNavigate();

  console.log(searchParams, "searchParams");
  console.log("----------------------------------------------------------------");
  for(let entry of searchParams){
     console.log(entry);
  }
  console.log("----------------------------------------------------------------");
  console.log(location, "location or current route"); //This will give an object the route
  console.log(location.pathname, "pathname"); //This will give current route we are in
  console.log(location.search, "Search/Query paramter in route");//In string format 
  console.log("----------------------------------------------------------------");
  let userId = searchParams.get('userId') || undefined; //This is one of the way how we can get queryparameter
  let name = searchParams.get('name') || undefined; //This is one of the way how we can get query parameter
  console.log("----------------------------------------------------------------");

  if(userId){
     return (<div className='w-full flex flex-col items-center gap-2'>
          <h1 className='text-2xl font-bold'>User Id is: {userId}</h1>
          <p className='text-lg font-semibold'> User name is: {name}</p>
          <p className='text-lg'>The route is : <span className='text-orange-500'>{location.pathname}</span></p>
          <p className='text-lg'>The extra search param is: <span className='text-teal-500 font-md text-lg'>{location.search}</span></p>
          <button onClick={()=>navigate(-1)} className='px-2 py-2 bg-green-300 text-lg font-md rounded-md'>Go back</button>
     </div>)
  }

  return (
    <div className='w-full flex flex-col items-center gap-2'>
      <h1 className='text-2xl font-bold'>User Details: {id}</h1>
      <p>This is the user details page for user with ID: {id}</p>
      <p className='text-lg'>The route is : <span className='text-orange-500'>{location.pathname}</span></p>
          <p className='text-lg'>The extra search param is: <span className='text-teal-500 font-md text-lg'>{location.search}</span></p>
      <button onClick={()=>navigate(-1)} className='px-2 py-2 bg-green-300 text-lg font-md rounded-md'>Go back</button>
    </div>
  )
}

export default User