import Link from "next/link";
import { Product } from "../interfaces/product";
import Image from 'next/image';
import CardProduct from "../components/CardProduct";
import CardItemProduct from "../components/CardItemProduct";



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

const RowProduct = ({product} : Props) => {
    const {id } = product;
    const { gallery } = product.attributes;
    


    const images =  gallery.data === null ? [] : gallery.data
    /* const {url, width, height} = image.data.attributes */

    return( 
        <div className="grid grid-cols-4 gap-4 mt-7 mb-7">
        <div className="col-span-full md:col-span-1">
          <CardProduct key={product.id} product={product} />
        </div>
        <div className="col-span-2 md:col-span-1">
          <CardItemProduct key={product.id} product={product} />
        </div>
        <div className="col-span-2 md:col-span-1">
          <CardItemProduct key={product.id} product={product} />
        </div>
      </div>
      
       
    )
}

export default RowProduct;