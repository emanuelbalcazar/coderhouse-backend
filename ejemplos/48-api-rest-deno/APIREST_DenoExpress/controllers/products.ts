import { v4 } from "../deps.ts";
import { Product } from "../types/types.ts";
let products: Product[] = [
  {
    id: "1",
    name: "Product 1",
    description: "This is product 1",
    price: 18.89,
  },
  {
    id: "2",
    name: "Product 2",
    description: "This is product 2",
    price: 38.66,
  },
  {
    id: "3",
    name: "Product 3",
    description: "This is product 3",
    price: 169.15,
  },
];

// @desc Get Products
// @route Get /api/products
const getProducts = async (request: any, response: any) => {
  await response.json({
    error: false,
    data: products,
  });
};

// @desc Get Single Product
// @route Get /api/products/:id
const getProduct = async (request: any, response: any) => {
  console.log(request.params);
  const product: Product | undefined = products.find(
    (p) => p.id === request.params.id
  );
  if (product) {
    await response.json({
      error: false,
      data: product,
    });
  } else {
    response.status = 404;
    await response.json({
      error: true,
      message: "No product found",
    });
  }
};

// @desc Add product
// @route Post /api/products
const addProduct = async (request: any, response: any) => {
  //   console.log(await request.data);
  if (!request.data) {
    response.status = 400;
    response.json({
      error: true,
      message: "No data",
    });
  } else {
    const product: Product = await request.data;
    product.id = v4.generate();
    products.push(product);
    response.json({
      error: false,
      data: product,
    });
  }
};

// @desc Update Product
// @route PUT /api/products/:id
const updateProduct = async (request: any, response: any) => {
  const id_param = await request.params.id;
  const data = await request.data;
  const product: Product | undefined = products.find((p) => p.id === id_param);

  if (product) {
    const updateData: {
      name?: string;
      description?: string;
      price?: number;
    } = data;

    products = products.map((p) =>
      p.id === id_param ? { ...p, ...updateData } : p
    );

    response.json({
      error: false,
      data: products,
    });
  } else {
    response.status = 400;
    response.json({
      error: true,
      message: "No data",
    });
  }
};

// @desc Delete Product
// @route DELETE /api/product/:id
const deleteProduct = async (request: any, response: any) => {
  const id_param = await request.params.id;
  products = products.filter((p) => p.id !== id_param);
  response.json({
    error: false,
    message: "Product Deleted",
    data: products,
  });
};

export { getProducts, getProduct, addProduct, updateProduct, deleteProduct };