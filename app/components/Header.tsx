"use client";

import { Navbar } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nt } from "@/app/helpers/names-tailwind";
// import { useContext } from "react";
// import { cartContext } from "@/context/CartContext";

const navLinks = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/products",
    text: "Products",
  }
];

const Header = () => {
  const pathname = usePathname();
  // const { totalQuantityProduct } = useContext(cartContext);

  return (
    <Navbar
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold ring-green-500">
          Strapi
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {navLinks.map((navLink) => (
          <Navbar.Link
            key={navLink.href}
            href={navLink.href}
            active={pathname === navLink.href}
            as={Link}
            className={nt(
              pathname === navLink.href && "text-red-700 bg-gray-950"
            )}
          >
            <span className="relative">
              {navLink.text}
              {/* {navLink.text === "Cart" && (
                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -right-5">
                  {totalQuantityProduct}
                </div>
              )} */}
            </span>
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
