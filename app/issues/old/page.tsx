import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

type Users = {
  id: number;
  name: string;
  email: string;
};

const ServerDataFetching = async () => {
  const body = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: Users[] = await body.json();
  return (
    <div className="pt-5">
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <Button>
        <Link href="/issues/old?sortOrder=users">Users</Link>
      </Button>
    </div>
  );
};

export default ServerDataFetching;
