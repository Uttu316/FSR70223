import domains from "./domains";


const END_POINTS= {
    get_categories:`${domains.fakeStore}/products/categories`,
    get_products:`/products`,
    login:`${domains.fakeStore}/auth/login`
}


export default END_POINTS