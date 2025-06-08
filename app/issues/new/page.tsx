"use client";
import { Button } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

type Users = {
  id: number;
  name: string;
  email: string;
};

const NewIssuesPage = () => {
  // const [users, setUsers] = useState<Users[]>([]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const body = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const data = await body.json();
  //     setUsers(data);
  //   };
  //   fetchUsers();
  // }, []);
  const fetchUsers = async (): Promise<Users[]> => {
    return new Promise((resolve) => {
      setTimeout(async () => {
        const body = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await body.json();
        resolve(data);
      }, 3000);
    });
  };

  const {
    data: users,
    isLoading,
    error,
  } = useQuery<Users[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching users</p>;

  return (
    <div className="pt-5">
      <ul>
        {users!.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NewIssuesPage;
