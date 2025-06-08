import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const IssueAction = () => {
  return (
    <Flex mb="5" justify="between">
      <Button variant="solid" color="cyan">
        <Link href="/issues/new">Client Data Fetching</Link>
      </Button>
      <Button variant="solid" color="cyan">
        <Link href="/issues/old">Server Data Fetching</Link>
      </Button>
    </Flex>
  );
};

export default IssueAction;
