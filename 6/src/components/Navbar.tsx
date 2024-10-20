import { NavLink, useMatch } from "react-router-dom";

const Navbar = () => {
  let isMatched = useMatch('/dashboard'); //If path exactly matches it returns an object
  
  console.log(isMatched, "--------------------matched to /dashboard--------------------");

  isMatched = useMatch('/dashboard/*'); //If path starts with /dashboard it will return an object

  console.log(isMatched, "--------------------matched starts with /dashboard--------------------");
  
  if (isMatched) {
    return (<div className="w-full">
      <div className="w-full h-12 flex items-center justify-between px-3 bg-zinc-100 shadow-md border-b-2 border-zinc-500">
        <h1>Welcome! Amar to the profile page</h1>
        <NavLink
          to="/home"
          className={(e) =>
            (e.isActive ? "text-orange-400" : "") + " text-lg font-bold"
          }
        >
          Logout
        </NavLink>
      </div>
    </div>); // Skip rendering navbar if the current path is /dashboard
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-3 w-full h-12 bg-green-200">
        <NavLink
          to="/home"
          className={(e) =>
            (e.isActive ? "text-orange-400" : "") + " text-lg font-bold"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={(e) =>
            (e.isActive ? "text-orange-400" : "") + " text-lg font-bold"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contacts"
          className={(e) =>
            (e.isActive ? "text-orange-400" : "") + " text-lg font-bold"
          }
        >
          Contacts
        </NavLink>
        <NavLink
          to="/dashboard"
          className={(e) =>
            (e.isActive ? "text-orange-400" : "") + " text-lg font-bold"
          }
        >
          Dashboard
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
