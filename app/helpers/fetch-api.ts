import qs from "qs";
import { getStrapiUrl } from "./api-helper";

export const fetchApi = async ( 
    path: string,
    urlParamsObject = {},
    options = {}
) => {

    try {

        const mergedOptions = {
            next: {revalidate: 60},
            ...options,
            headers: {
                "Content-Type": "application/json"
            }
        }

        const queryString = qs.stringify(urlParamsObject, {encodeValuesOnly: true})
        console.log(queryString)

        const requestUrl = `${getStrapiUrl(
            `/api${path}${queryString ? `?${queryString}` : "" }` 
        )}`
        console.log("request url:");
        console.log(requestUrl);

        const res = await fetch(requestUrl, mergedOptions)
        const data = await res.json()

        return data;

    } catch (error) {
        console.log(error)
        throw new Error ("Error fetching api")
    }

     /*    const mergedOptions = {
            next: {revalidate: 60}
        } */
};
