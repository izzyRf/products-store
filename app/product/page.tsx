/* import { getStrapiUrl } from "../helpers/api-helper"; */

import { pages } from "next/dist/build/templates/app-page";
import { fetchApi } from "../helpers/fetch-api";

import PageHeader from "../components/PageHeader";
import { Product } from "../interfaces/product";
import CardProduct from "../components/CardProduct";



const getProducts = async ( page = 1 , pageSize =25 ) => {
    const path = "/products";
    const urlParamsObject = {
        populate: "*",
        sort: {
            createdAt: "asc"
        },
        pagination:{
            page: page,
            pageSize: pageSize,
        }
    };

    const { data, meta} = await fetchApi(path, urlParamsObject )

    return {
        data,
        pagination: meta.pagination
    };

};


const Products = async () => {
    const {data} = await getProducts();

    return (
        <div>
            <PageHeader text="Welcome to our site, here you'll find all kind of products about beauty and for your skin"/>
            <div className="grid gap-4">
                {
                    data.map((product: Product ) => (
                        <CardProduct
                            key= {product.id}
                            product = {product}
                        />
                    ))
                }

            </div>


           
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>

        </div>
    );
};

export default Products;