import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="font-display text-8xl font-normal text-accent">404</h1>
      <h2 className="text-2xl font-display mt-4">Page Not Found</h2>
      <p className="text-muted mt-3 max-w-md">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="liquid-glass mt-10 rounded-full px-8 py-3 text-sm font-medium hover:bg-white/5 transition"
      >
        Go Home
      </Link>
    </div>
  );
}