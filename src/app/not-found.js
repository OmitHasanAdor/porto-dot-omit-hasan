import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <h1 className="font-display text-8xl">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-foreground">Page Not Found</h2>
      <p className="mt-3 text-muted-foreground">The page you are looking for doesn&apos;t exist.</p>
      <Button as={Link} href="/" variant="glass" className="mt-8">
        Back Home
      </Button>
    </div>
  );
}
