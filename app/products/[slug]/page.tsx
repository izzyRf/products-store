import { fetchApi } from "@/app/helpers/fetch-api";
import { notFound } from "next/navigation";
import { Product } from "@/app/interfaces/product";
import Link from "next/link";

const formatCurrency = (amount: number) => {
    return amount.toLocaleString('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 2,
    });
  };

const getProducts = async ( slug: string ) => {
    const path = "/products";
    const urlParamsObject = {
        populate: "*",
        filters:{
            slug:slug
        }
    };

    const  data = await fetchApi(path, urlParamsObject )

    return data;

};

interface Props{
    params: {
        slug: string;
    };
}

interface Props2{
    id: string;
    attributes: {
        url: string;
        name: string;
    };
}

const Slug = async ({params}: Props) => {
    const {slug} = params
    const product : Product = await getProducts(slug)
    const {name, description, price, image, rating, discount, gallery } = product.data[0].attributes;
    const {url, width, height} = image.data.attributes;
    const images = gallery.data ? gallery.data : [];

    if ( product.data.length === 0) {
        return notFound();
    }

    return ( 
    <div>
        <div className="grid gap-4 mt-20">
            <div className="flex items-center justify-center">
        <h1>{name}</h1>
            </div>
            <div className="flex items-center justify-center">
        <img className=" h-auto max-w-xs" src={url} alt="Descripción de la imagen" />
            </div>
            <div className="flex items-center justify-center">
        <span className="text-2xl font-bold text-black ">
            { formatCurrency(price) }
        </span>
            </div>
            <div className="grid grid-cols-5 gap-4">
                {images.length > 0 &&
                images.map((img: any) => (
                    <div key={img.id}>
                        <img
                            className="h-[180px] max-w-full  m-6"
                            src={img.attributes.url}
                            alt={img.attributes.name}
                        />
                    </div>
                ))}
            </div>
            {/* <pre>
                {JSON.stringify(product, null, 2)}
            </pre> */}
        </div>
            <div className="mt-5 grid grid-cols-4 gap-1">
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
            </div>
        </div>
        <br/>
    </div>
        ) ;
}

export default Slug;