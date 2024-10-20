import { NavLink } from "react-router-dom";

function Navbar() {
  const extraStyle = " text-md font-semibold hover:text-red-400";
  return (
    <>
      <nav className="w-full bg-green-200 h-20 flex items-center justify-center gap-4 md:gap-5 lg:gap-6">
        <NavLink
          className={(e) =>
            e.isActive ? "text-red-400" : "text-zinc-600" + extraStyle
          }
          to="/home"
        >Home</NavLink>
        <NavLink
          className={(e) =>
            e.isActive ? "text-red-400" : "text-zinc-600" + extraStyle
          }
          to="/about"
        >About</NavLink>
        <NavLink
          className={(e) =>
            e.isActive ? "text-red-400" : "text-zinc-600" + extraStyle
          }
          to="/dashboard"
        >Dashboard</NavLink>
        <NavLink
          className={(e) =>
            e.isActive ? "text-red-400" : "text-zinc-600" + extraStyle
          }
          to="/contacts"
        >Contacts</NavLink>
      </nav>
    </>
  );
}

export default Navbar;
