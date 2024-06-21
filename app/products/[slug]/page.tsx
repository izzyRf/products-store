import { fetchApi } from "@/app/helpers/fetch-api";
import { notFound } from "next/navigation";
import { Product } from "@/app/interfaces/product";

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


const Slug = async ({params}: Props) => {
    const {slug} = params
    const product : Product = await getProducts(slug)

    if ( product.data.length === 0) {
        return notFound();
    }

    return ( <div>
                <pre>
                    {JSON.stringify(product, null, 2)}
                </pre>
            </div>
            ) ;
}

export default Slug;