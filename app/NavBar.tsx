"use child";
import { Button, Container, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const lists = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="border-b mb-5 px-5 py-3">
      <Container>
        <Flex asChild gap="4">
          <ul>
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
