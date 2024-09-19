import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#554148]  bg-opacity-50 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 h-20">
        <header className=" py-4 px-4 md:px-20 flex items-center justify-between h-full">
          <Link
            href="/"
            className="flex items-center gap-2 transition-transform hover:scale-105"
          >
            <Image
              src="/images/logo.png"
              className=""
              alt="dela wrapped in curly braces"
              width={80}
              height={80}
            />
          </Link>

          <nav className="sm:ml-auto flex gap-6">
            <Link
              href="https://github.com/delabahmani"
              target="_blank"
              className="text-xs transition-all hover:animate-wiggle hover:opacity-80"
              prefetch={false}
            >
              <Image
                src="/images/github-white.png"
                width={30}
                height={30}
                alt="github logo"
              />
            </Link>

            <Link
              href="https://www.linkedin.com/in/delara-bahmani/"
              target="_blank"
              className="text-xs hover:animate-wiggle"
              prefetch={false}
            >
              <Image
                src="/images/linked-in.png"
                width={30}
                height={30}
                alt="linkedin logo"
              />
            </Link>
          </nav>
        </header>
      </div>
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
