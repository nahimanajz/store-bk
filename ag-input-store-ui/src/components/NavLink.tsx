import Link from "next/link";
import { FC } from "react";

interface NavLinkProps {
  label: string;
  target: string
}

const NavLink: FC<NavLinkProps> = ({ label, target }) => {
  return (
    <Link
      href={target}
      className="hover:border-[0.5px]  rounded-md hover:border-tertially hover:bg-secondary hover:font-medium p-3 "
    >
      {label}
    </Link>
  );
};

export default NavLink;
