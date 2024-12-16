import { Button, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>Next.js on Deno - New Code</div>
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button>Let's go</Button>
      </Flex>
      <Link href="/adiel">
        Go To Adiel
      </Link>
    </main>
  );
}
