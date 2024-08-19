"use client";
import useSWR from "swr";

const fetcher = async (url: string, options?: RequestInit) => {
  const res = await fetch(url, options);
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Network response was not ok: ${errorText}`);
  }
  return res.json();
};

export default function Detail({ params }: { params: { id: string } }) {
  const { data, error } = useSWR(
    `https://api-pro.teklearner.com/product/v1/get-product-detail?id=${params.id}`,
    fetcher,
    { refreshInterval: 6000 }
  );

  if (error) return <div>Lỗi load dữ liệu: {error.message}</div>;
  if (!data) return <div>Đang tải...</div>;

  // Kiểm tra và lấy sản phẩm từ dữ liệu
  const product = data.data;

  if (!product) return <div>Không tìm thấy sản phẩm.</div>;

  return (
    <div className="bg-body-tertiary pt-4">
      <div className="container">
        <div>
          <p className="fw-medium">
            Home <i className="bi bi-chevron-right"></i>
            Skincare <i className="bi bi-chevron-right"></i>
            Brand <i className="bi bi-chevron-right"></i>
            {product.product_title}
          </p>
        </div>
        <h2>Details</h2>
        <div className="row bg-body py-5">
          <div className="col-12 col-lg-6 mb-4">
            <div className="container">
              <div className="row">
                <div className="col-4 col-sm-3 mb-3">
                  {product.product_gallery.map((url: string, index: number) => (
                    <img
                      key={index}
                      src={url}
                      className="img-thumbnail mt-3"
                      alt={`Product Image ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="col-8 col-sm-9">
                  <img
                    src={product.product_gallery[0]}
                    className="img-thumbnail"
                    alt="Main Product"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 fw-bold">
            <h4 className="text-uppercase">
              {product.product_brand || "Brand"}
            </h4>
            <h3>{product.product_title}</h3>
            <p>
              <i className="bi bi-heart pe-2"></i>Add to Favourites
            </p>
            <p>{product.product_description}</p>
            <p className="text-decoration-underline">Read More</p>
            <div className="d-flex flex-column flex-md-row gap-3">
              <p className="pt-2 text-decoration-line-through text-black-50 bg-white">
                AED {product.product_price}
              </p>
              <p className="pt-2">AED {product.product_sale_price}</p>
              <p className="border border-black px-3 py-2 fw-bold">30% Off</p>
            </div>
            <div className="d-flex flex-column flex-md-row gap-2">
              <p>You can track the price of this product </p>
              <p className="text-decoration-underline">Track Rate</p>
            </div>
            <div className="my-3 d-flex flex-column flex-md-row gap-3">
              <button className="b-detail bg-black text-light fw-bold">
                ADD TO CART
              </button>
              <button className="b-detail bg-black text-light fw-bold">
                BUY NOW
              </button>
            </div>
            <p className="text-decoration-underline">
              <i className="bi bi-heart pe-2"></i> View My Favourite List
            </p>
            <div className="container-fluid text-center">
              <div className="row gap-3">
                {/* Render thêm thông tin  */}
                <div className="col-12 col-sm-6 col-md-3 py-2 fs-6 border">
                  Lorem ipsum
                </div>
                <div className="col-12 col-sm-6 col-md-3 py-2 fs-6 border">
                  Lorem ipsum
                </div>
                <div className="col-12 col-sm-6 col-md-3 py-2 fs-6 border">
                  Lorem ipsum
                </div>
                <div className="col-12 col-sm-6 col-md-3 py-2 fs-6 border">
                  Lorem ipsum
                </div>
                <div className="col-12 col-sm-6 col-md-3 py-2 fs-6 border">
                  Lorem ipsum
                </div>
                <div className="col-12 col-sm-6 col-md-3 py-2 fs-6 border">
                  Lorem ipsum
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
