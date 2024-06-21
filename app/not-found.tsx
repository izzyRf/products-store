import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid grid-cols-1 place-items-center h-screen">
      <div className="text-center space-y-4">
        <h1 className="text-3xl">Sorry...!! 🤕</h1>
        <p>We couldn’t find the product or the requested resource. 🐞</p>
        <Link
          href="/products"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Go back
        </Link>
      </div>
    </div>
  );
}
