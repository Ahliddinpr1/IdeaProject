import Link from "next/link";
import React from "react";
import Btn from "./btn";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-5 fixed top-0 bg-[#ffffffa3] w-[100%] mb-100">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        📚 I want Study
      </h1>
      <nav className="flex items-center gap-10 text-xl">
        <Link href={"/"}>Home</Link>
        <Link href={"/Courses"}>Courses</Link>
      </nav>
      <div>
        <Btn text={"Add my Center"} />
      </div>
    </header>
  );
};

export default Header;
