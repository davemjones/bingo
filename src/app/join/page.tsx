import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function JoinPage() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 p-8 gap-6">
      <h2 className="text-2xl font-bold">Join an Existing Bingo Session</h2>
      <p className="text-center text-lg">This is the page to join an existing bingo session.</p>
      <Button asChild>
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}