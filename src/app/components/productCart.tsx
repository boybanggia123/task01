"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
export default function ProductCart() {
  const [products, setProducts] = useState<ProductType[]>([]);

  interface ProductType {
    id: number;
    product_gallery: string;
    product_title: string;
    product_slug: string;
    product_price: string;
    product_sale_price: string;
  }

  useEffect(() => {
    // Fetch data using Axios
    axios
      .get("https://api-pro.teklearner.com/product/v1/get-list-product")
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);
  const numberOfProductsToShow = 1;
  return (
    <>
      {products.slice(0, numberOfProductsToShow).map((product) => (
        <div className="row mt-4 " key={product.id}>
          <div className="col  ">
            <div className="text-center show-main ">
              <img
                src={product.product_gallery}
                className="rounded"
                alt={product.product_title}
              />
              <button className="show-sup fw-bolder ">
                <Link href={`/chitiet/${product.id}`}> Show Now</Link>
              </button>
            </div>
          </div>
          <div className="col my-2">
            <div className="container text-center ">
              <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-6 mb-4">
                  <div className="card ">
                    <div className="img-sup">
                      <img
                        src={product.product_gallery}
                        className="card-img-top"
                        alt={product.product_title}
                      />
                      <button className="fw-bold">CATEGORY</button>
                    </div>

                    <div className="card-body text-start">
                      <h5 className="card-title fw-bold">
                        {product.product_slug}
                      </h5>
                      <p className="card-text fs-6">BRAND</p>
                      <div className="d-flex justify-content-between titel">
                        <p className="fw-light text-decoration-line-through">
                          {product.product_price}
                        </p>
                        <p className="fw-bold">{product.product_sale_price}</p>
                        <p className="sale fw-bold">30% Off</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-4">
                  <div className="card ">
                    <div className="img-sup">
                      <img
                        src={product.product_gallery}
                        className="card-img-top"
                        alt={product.product_title}
                      />
                      <button className="fw-bold">CATEGORY</button>
                    </div>

                    <div className="card-body text-start">
                      <h5 className="card-title fw-bold">
                        {product.product_slug}
                      </h5>
                      <p className="card-text fs-6">BRAND</p>
                      <div className="d-flex justify-content-between titel">
                        <p className="fw-light text-decoration-line-through">
                          {product.product_price}
                        </p>
                        <p className="fw-bold">{product.product_sale_price}</p>
                        <p className="sale fw-bold">30% Off</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      ,
      {products.slice(0, numberOfProductsToShow).map((product) => (
        <div className="row mt-4 " key={product.id}>
          <div className="col my-2">
            <div className="container text-center ">
              <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-6 mb-4">
                  <div className="card ">
                    <div className="img-sup">
                      <img
                        src={product.product_gallery}
                        className="card-img-top"
                        alt={product.product_title}
                      />
                      <button className="fw-bold">CATEGORY</button>
                    </div>

                    <div className="card-body text-start">
                      <h5 className="card-title fw-bold">
                        {product.product_slug}
                      </h5>
                      <p className="card-text fs-6">BRAND</p>
                      <div className="d-flex justify-content-between titel">
                        <p className="fw-light text-decoration-line-through">
                          {product.product_price}
                        </p>
                        <p className="fw-bold">{product.product_sale_price}</p>
                        <p className="sale fw-bold">30% Off</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-4">
                  <div className="card ">
                    <div className="img-sup">
                      <img
                        src={product.product_gallery}
                        className="card-img-top"
                        alt={product.product_title}
                      />
                      <button className="fw-bold">CATEGORY</button>
                    </div>

                    <div className="card-body text-start">
                      <h5 className="card-title fw-bold">
                        {product.product_slug}
                      </h5>
                      <p className="card-text fs-6">BRAND</p>
                      <div className="d-flex justify-content-between titel">
                        <p className="fw-light text-decoration-line-through">
                          {product.product_price}
                        </p>
                        <p className="fw-bold">{product.product_sale_price}</p>
                        <p className="sale fw-bold">30% Off</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col  ">
            <div className="text-center show-main ">
              <img
                src={product.product_gallery}
                className="rounded"
                alt={product.product_title}
              />
              <button className="show-sup fw-bolder "> Show Now </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
