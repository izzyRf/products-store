import Image from "next/image";
import Link from "next/link";

const PageFooter = () => {
    return(
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <Image
                src="/e-commerce.png" 
                alt="image from flaticon.es"
                width={100} 
                height={140} 
            />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">E-commerce</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <Link href="/products" className="hover:underline me-4 md:me-6">Productos</Link>
                </li>
                <li>
                    <Link href="https://portafolio-isidoro.vercel.app/" className="hover:underline me-4 md:me-6" target="_blank">Mi portafolio</Link>
                </li>
                <li>
                    <Link href="https://www.linkedin.com/in/izzy-rodriguez-7a2443147/" className="hover:underline me-4 md:me-6" target="_blank">Mi perfil</Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link href="https://www.linkedin.com/in/izzy-rodriguez-7a2443147/" className="hover:underline" target="_blank">Isidoro Rodríguez F.</Link> </span>
    </div>
        </footer>
    );
}

export default PageFooter;