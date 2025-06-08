"use client";

import { Container } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];

  return (
    <nav className="border-b border-gray-300 mb-6 px-8 py-5 bg-white">
      <Container>
        <ul className="flex gap-8 text-lg font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-gray-300 hover:text-black transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};

export default NavBar;
