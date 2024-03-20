import Link from "next/link";

type Props = {
  href: string | any;
  title: string | any;
};

const NavLink = ({ href, title }: Props) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#eabcfa] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
