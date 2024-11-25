import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export interface IResponse {
  products: IProductItem[];
  limit: string;
  skip: string;
  total: string;
}

export interface IProductItem {
  id: number;
  title: string;
  price: string;
  images: string[];
}

export interface IProductImages {
  images: string[];
}

const Weather: React.FC = () => {
  const [products, setProducts] = useState<IProductItem[]>([]);
  const [searchText, setSearchText] = useState("");
  const [savedProducts, setsavedProducts] = useState<IProductItem[]>([]);

  // const localStored = localStorage.getItem("cart")
  // ? JSON.parse(localStorage.getItem("cart")!)
  // : [];

  useEffect(() => {
    const localStored = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")!)
      : [];

    if (localStored) {
      setsavedProducts(localStored);
    }
  }, []);

  useEffect(() => {
    if (savedProducts.length > 0) {
      localStorage.setItem("cart", JSON.stringify(savedProducts));
    }
  }, [savedProducts]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: IResponse = await fetch(
          "https://dummyjson.com/products"
        ).then((res) => res.json());
        const jsonData = response.products;
        setProducts(jsonData);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener("searchText", handleSearch);
  }, []);

  const handleSearch = (event: any) => {
    setSearchText(event.detail.name);
  };

  const filteredProducts = searchText
    ? products.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      )
    : products;

  const saveProduct = (id: Number) => {
    let filterProduct = products.filter((product) => {
      return product.id === id;
    });
    const existingSavedProduct = localStorage.getItem("cart");
    const cart = existingSavedProduct ? JSON.parse(existingSavedProduct) : [];
    cart.push({ ...filterProduct[0] });
    localStorage.setItem("cart", JSON.stringify(cart));
    setsavedProducts(cart);
  };

  const removeProduct = (id:number) => {
    const localStored = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")!)
      : [];
    const deletedProduct = localStored.filter((product:any) => product.id !== id )
    localStored.push({...deletedProduct[0]})
    localStorage.setItem("cart", JSON.stringify(deletedProduct));
    setsavedProducts(deletedProduct);
  }

  return (
    <div className="w-full mx-auto px-4 py-4">
      <div className="flex flex-wrap all-products">
        {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-white">Product List</h2> */}
        {filteredProducts?.map((product, index) => (
          <div key={product.id} className="p-2 w-1/4 product-item">
            <div className="bg-white">
              {/* <Link  to={`/product-details/${product.id}`}> */}
              <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  <div key={index} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        alt={product.images[0]}
                        src={product.images[0]}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700" id="product-title">
                          {product.title}
                        </h3>
                        <p className="text-sm font-medium text-gray-900" id="product-price">
                          Rs.{product.price}
                        </p>
                      </div>
                      {/* <p className="text-sm font-medium text-gray-900">
                        Rs.{product.price}
                      </p> */}
                      {savedProducts
                        .map((item) => item.id)
                        .includes(product.id) || (
                        <button
                          type="button"
                          onClick={() => {
                            saveProduct(product.id);
                          }}
                          className="text-white bg-blue-700 px-4 py-2 h-10 font-medium text-sm rounded"
                        >
                          Save
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* </Link> */}
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex flex-wrap">
      {savedProducts.length > 0 ? (
        <h2 className="text-2xl font-bold text-gray-900">Saved Products</h2>
        ) : <p></p>}
      </div> 
      <div className="flex flex-wrap">
        {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-white">Product List</h2> */}
        {savedProducts?.map((product, index) => (
          <div key={product.id} className="p-2 w-1/4">
            <div className="bg-white">
              <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  <div key={index} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        alt={product.images[0]}
                        src={product.images[0]}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          {product.title}
                        </h3>
                        <p className="text-sm font-medium text-gray-900">
                          Rs.{product.price}
                        </p>
                      </div>
                      
                      <button
                          type="button"
                          onClick={() => {
                            removeProduct(product.id);
                          }}
                          className="text-white bg-red-700 px-4 py-2 h-10 font-medium text-sm rounded"
                        >
                          Remove
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;
