import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white ">
      <div className="container p-12 flex justify-between  ">
        <span>
          <Link href={"/"}>
            <Image
              src="/images/logo.png"
              className=""
              alt="The word dela wrapped in braces"
              width={100}
              height={10}
            />
          </Link>
        </span>
        <p className="text-slate-600  ">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
