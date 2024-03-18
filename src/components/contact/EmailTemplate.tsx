import * as React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
    <div>
      <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
      <p className="text-[#ADB7BE] mb-4 max-w-md">
        Whether it&apos;s a friendly hello or a potential collaboration, my
        inbox is open to all possibilities.
      </p>
      <div className="socials flex flex-row gap-2">
        <Link href="https://github.com/delabahmani">
          <IoLogoGithub aria-label="Github Logo Icon"/>
        </Link>
        <Link href="www.linkedin.com/in/delara-bahmani-0418b727b">
          <FaLinkedin aria-label="Linkedin Logo Icon"/>
        </Link>
      </div>
    </div>
    <div>
      <form className="flex flex-col gap-4">
        <label htmlFor="email" className="text-white">Email</label>
        <input type="email" id="email" required placeholder="johndoe@email.com"/>
      </form>
    </div>
  </section>
);
