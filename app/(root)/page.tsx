import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="">
      <Button size="icon" variant="secondary">
        <UserButton />
      </Button>
    </main>
  );
}
