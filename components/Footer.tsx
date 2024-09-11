import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-10">
      <footer className="flex justify-center py-6 w-full shrink-0 items-center border-t border-[#2c3e50]">
        <p className="text-xs text-[#7f8c8d]">
          <Link
            href="https://pantheras.ca/"
            className="hover:underline underline-offset-4 animate-pulse text-pink-300 hover:cursor-pointer"
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
