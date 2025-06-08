import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";

type Users = {
  id: number;
  name: string;
  email: string;
};

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const ServerDataFetching = async ({ searchParams }: Props) => {
  const sortOrder =  searchParams?.sortOrder === "desc" ? "desc" : "asc";

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: Users[] = await res.json();

  const sorted =
    sortOrder === "desc"
      ? sort(data).desc((user) => user.name)
      : sort(data).asc((user) => user.name);

  return (
    <div className="pt-5">
      <ul>
        {sorted.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <div className="flex gap-4 mt-4">
        <Button>
          <Link href="/issues/old?sortOrder=asc">Sort Asc</Link>
        </Button>
        <Button>
          <Link href="/issues/old?sortOrder=desc">Sort Desc</Link>
        </Button>
      </div>
    </div>
  );
};

export default ServerDataFetching;
