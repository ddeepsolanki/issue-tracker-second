"use child"
import { Container, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const lists = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];

  return (
    <nav className="border-b mb-20 px-5 py-3 pb-8">
      <Container>
        <Flex asChild gap="4">
          <ul className="flex space-x-6">
            {lists.map((list) => (
              <li key={list.href}>
                <Link href={list.href}>{list.label}</Link>
              </li>
            ))}
          </ul>
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
