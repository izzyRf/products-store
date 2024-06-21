import Link from "next/link";
import { Product } from "../interfaces/product";
import Image from 'next/image';

const formatCurrency = (amount: number) => {
    return amount.toLocaleString('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 2,
    });
  };

interface Props {
    product : Product;
}

const CardProduct = ({product} : Props) => {
    const {id } = product;
    const {name, description, price, image, rating, discount, slug } = product.attributes;
    const {url, width, height} = image.data.attributes

    return(
        <div className=" w-full bg-white border border-gray-200 rounded-lg hover:drop-shadow-lg transform transition-transform hover:scale-105 ">
            <div className="flex items-center justify-end">
               {/*  <img className="mt-4 mr-4" width="35" height="35" src="https://img.icons8.com/color-glass/48/add.png" alt="add"/> */}
                <img className="mt-4 mr-4" width="35" height="35" src="https://img.icons8.com/parakeet/48/add-shopping-cart.png" alt="add-shopping-cart"/>
            </div>
        <div className="flex items-center justify-center">
             
            <img src={url} alt={`image ${name}`} className="h-[380px] max-w-full  m-5" />
            {/* image para optimización */}
            {/* <Image className="rounded-t-lg" 
                src={url} 
                alt={`image ${name}`} 
                width={width}  
                height={height}
            /> */}
        </div>
        <div className="px-5 pb-5">
            <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <Link 
                    href={`/products/${slug}`} 
                ><span className="text-2xl  text-slate-900 "> { name }</span>
                </Link>
                
            </div>
            {/* <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{`descuento: ${discount * 100} %`}</span> */}
            </div>
            <div className="flex items-center justify-left">
            <span className="text-2xl font-bold text-black ">
                { formatCurrency(price) }
            </span>
            {discount > 0 && (
                <span className="bg-emerald-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded ml-3 mr-3">
                  {`- ${discount * 100} %`} Descuento
                </span>
            )}


            
           {/*  <Link 
                href={`/products/${slug}`} 
                className="text-emerald-800 bg-teal-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Details
            </Link> */}
            
            </div>
            <div className="flex items-center justify-end">

                <Link 
                    href={`/products/${slug}`} 
                >
                    <img className="mr-0" width="35" height="35" src="https://img.icons8.com/color-glass/48/connection-status-off.png" alt="connection-status-off"/>
                </Link>
                
            </div>
        </div>
        </div>
    )
}

export default CardProduct;