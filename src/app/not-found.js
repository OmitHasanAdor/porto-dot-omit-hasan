import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-8xl font-bold text-cyan-400">
        404
      </h1>

      <h2 className="text-3xl font-bold text-white mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-400 mt-3">
        The page you are looking for doesn&apos;t exist.
      </p>

      <Link
        href="/"
        className="mt-8 px-6 py-3 bg-cyan-500 text-black rounded-xl font-semibold"
      >
        Back Home
      </Link>
    </div>
  );
}