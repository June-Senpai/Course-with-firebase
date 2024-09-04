import { useState } from "react";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  const [name, setName] = useState("");
  const [instructor, setInstructor] = useState("");
  console.log(name);
  return (
    <div className="flex">
      <div className="bg-gray-300 p-2 basis-1/6 flex flex-col gap-5 h-screen">
        <h1 className="text-2xl font-bold">Alemeno</h1>
        <label className="cursor-pointer">
          Search by name
          <input type="text" name="" id="" onChange={(e) => setName(e.target.value)} />
        </label>
        <label className="cursor-pointer">
          Search by instructor
          <input type="text" name="" id="" />
        </label>
      </div>
      <div className="grow ">
        <Outlet />
      </div>
    </div>
  );
};
export default Navbar;
