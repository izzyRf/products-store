import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main  className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-200">
      {/* Enlaces */}
      <div className="mb-32 grid text-center">
   
          <Link href="/products" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className="mb-3 text-2xl font-semibold">
              Catálogo{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Explora la selección de productos.
            </p>
          </Link>
      </div>
    </main>
  );
}
