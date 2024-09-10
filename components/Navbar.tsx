import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <header className=" py-4 px-4 md:px-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            className=""
            alt="dela wrapped in curly braces"
            width={100}
            height={100}
          />
        </Link>

        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:animate-pulse"
            prefetch={false}
          >
            <Image
              src="/images/github-white.png"
              width={25}
              height={25}
              alt="github logo"
            />
          </Link>

          <Link
            href="#"
            className="text-xs hover:animate-pulse"
            prefetch={false}
          >
            <Image
              src="/images/linked-in.png"
              width={25}
              height={25}
              alt="linkedin logo"
            />
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
