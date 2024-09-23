import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-10">
      <footer className="flex justify-center py-6 w-full shrink-0 items-center border-t dark:border-[#2c3e50] border-[#96a2a8]">
        <p className="text-xs dark:text-[#7f8c8d] text-black">
          <Link
            href="https://pantheras.ca/"
            target="_blank"
            className="hover:underline underline-offset-4 animate-pulse dark:text-pink-300 text-y2kpinkdark hover:cursor-pointer"
          >
            Pantheras
          </Link>{" "}
          &copy; 2024 <span>Delara Bahmani</span>. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
