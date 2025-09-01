import Link from "next/link";
import React from "react";
import Btn from "./btn";

const Header = () => {
  return (
    <header className="flex items-center justify-between fixed px-10 py-5 top-0 w-[100%] bg-[#ffffffb4]">
      <h1 className="text-3xl font-bold text-center text-gray-800 flex">
        📚 <span className="hidden lg:block">I want Study</span>
      </h1>
      <nav className="flex items-center gap-10 text-xl">
        <Link href={"/"}>Главная</Link>
        <Link href={"/Courses"}>Курсы</Link>
        <Link href={"/About"}>О нас</Link>
      </nav>
      <div className="hidden lg:block">
        <Btn text={"Добавить центр"} />
      </div>
    </header>
  );
};

export default Header;