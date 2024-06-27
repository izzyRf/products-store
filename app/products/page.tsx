/* import { getStrapiUrl } from "../helpers/api-helper"; */

import { pages } from "next/dist/build/templates/app-page";
import { fetchApi } from "../helpers/fetch-api";
import { Product } from "../interfaces/product";
import CardProduct from "../components/CardProduct";
import RowProduct from "../components/RowProduct";
import PagePagination from "../components/PagePagination";


const getProducts = async ( page = 1 , pageSize = 8 ) => {
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

interface Props {
    searchParams:{
        page? : string;
    }
}

const Products = async ({searchParams}: Props) => {
    console.log(searchParams);
    const {page} = searchParams;
    let pageNumber = page ? parseInt(page): 1;
    if (isNaN(pageNumber) || pageNumber < 1) {
        pageNumber = 1;
    }
    const {data, pagination} = await getProducts(pageNumber);
    return (
        <div>
            <div className="container mx-auto px-1">
                <h4 className=" mt-20 mb-4 text-lg font-extrabold md:text-5xl lg:text-3xl">
                    <span className=" bg-clip-text text-slate-800">Hello!</span> 
                </h4>
                <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Welcome to our digital boutique! Find exclusive products and enjoy a seamless shopping experience </p>
                {/* <div className="mt-4 grid xs:grid-cols-12 sm::grid-cols-2  md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-5">
                    {
                        data.map((product: Product ) => (
                            <CardProduct
                                key= {product.id}
                                product = {product}
                            />
                        ))
                    }
                </div> */}

                <div >
                    {
                        data.map((product: Product ) => (
                            <RowProduct
                                key= {product.id}
                                product = {product}
                            />
                        ))
                    }
                </div> 



                <br/>
                <div className="flex justify-center mt-10">
                    <PagePagination pagination={pagination} />
                </div>
            </div>
            <br/>
            <br/>
            {/* <pre>
                {JSON.stringify(data, null, 2)}
            </pre> */}
        </div>
    );
};

export default Products;