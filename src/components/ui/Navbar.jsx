import { useSelector, useDispatch } from "react-redux";
import { Link, Outlet, useLocation } from "react-router-dom";
import { clearUser } from "../../state/userSlice";
import { auth } from "../../config/firebase";
import { setInstructor, setName } from "../../state/filter/FilterSlice";

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const location = useLocation();
  const isHomeRoute = location.pathname === "/";

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      dispatch(clearUser());
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <nav className="bg-gray-800 p-4 flex justify-between">
        <Link to="/" className="text-white text-lg font-bold">
          Alemeno
        </Link>
        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-white">Welcome, {user.email}</span>
            <button onClick={handleSignOut} className="bg-red-500 text-white px-4 py-2 rounded">
              Sign Out
            </button>
          </div>
        ) : (
          <Link to="/auth" className="text-white">
            Login / Sign Up
          </Link>
        )}
      </nav>
      <div className="flex">
        {isHomeRoute && (
          <div className="bg-gray-700 p-2 basis-1/6 flex flex-col gap-5 h-screen items-center">
            <label className="cursor-pointer space-x-4 space-y-4 text-white">
              <span> Search by course name</span>
              <input
                type="text"
                name=""
                id=""
                onChange={(e) => dispatch(setName(e.target.value))}
                className="text-black"
              />
            </label>
            <label className="cursor-pointer space-x-4 space-y-4 text-white">
              <span> Search by instructor</span>
              <input
                type="text"
                name=""
                id=""
                onChange={(e) => dispatch(setInstructor(e.target.value))}
                className="text-black"
              />
            </label>
          </div>
        )}
        <div className="grow ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Navbar;
