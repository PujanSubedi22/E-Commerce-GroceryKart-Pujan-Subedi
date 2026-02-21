import fs from "fs";

const products = fs.readFileSync("data/products.json", "utf8");

const getProducts = (query) => {

    const brand = query.brand ?? "";

    const data =JSON.parse(products);
    return data.filter((item) => item.brand == brand);
};

const getProductById = (id) => {
   const data = JSON.parse(products)

   return data.find((item) => item.id == id);
};

const createProduct = (data)=> {

    const productItems = JSON.parse(products);

    productItems.push(data)

    fs.writeFileSync("data/newProducts.json", JSON.stringify(productItems));
};


export default { getProducts, getProductById, createProduct }