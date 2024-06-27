import Link from "next/link";
import { Product } from "../interfaces/product";
import Image from 'next/image';



interface Props {
    product : Product;
}

const CardItemProduct = ({product} : Props) => {
    const {id } = product;
    const {name, description, price, image, rating, discount, slug } = product.attributes;
    const {url, width, height} = image.data.attributes

    return(
        <div>

          <img
            src={url}
            alt={`image ${name}`}
             className=" mt-5 w-full bg-white border border-gray-200 rounded-lg hover:drop-shadow-md transform transition-transform hover:scale-95"
          />
       
      </div>
      
    )
}

export default CardItemProduct;