import Image from "next/image";
import styles from "./page.module.css";
import ProductCart from "./components/productCart";
export default function Home() {
  return (
    <>
      {/* slide show */}
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="img/02.01.22_CollectionBanner_2048x550_BlackExcellence2.webp"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="img/7.19.21_CollectionBanner_70s.webp"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="img/10.25.22_CollectionBanner_FallLayers_copy_1.webp"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* container  */}
      <div className="bg-body-tertiary">
        <div className="container  text-center ">
          <h2 className="text-start pt-5 ">NEW ARRIVALS</h2>

          <ProductCart></ProductCart>

          <div className="container mt-5">
            <div className="row d-flex justify-content-center">
              <h2 className="text-start mb-5">NEW ARRIVALS</h2>
              <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
                <div className="card ">
                  <div className="img-sup">
                    <img
                      src="img/fashionnovablog.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <button className="fw-bold">CATEGORY</button>
                  </div>
                  <div className="card-body text-start">
                    <h5 className="card-title fw-bold">
                      Product Title Goes Here
                    </h5>
                    <p className="card-text fs-6">BRAND</p>
                    <div className="d-flex justify-content-between titel">
                      <p className="fw-light text-decoration-line-through">
                        AED 32.00
                      </p>
                      <p className="fw-bold">AED 25.60</p>
                      <p className="sale fw-bold">30% Off</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
                <div className="card ">
                  <div className="img-sup">
                    <img
                      src="img/fashionnovablog.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <button className="fw-bold">CATEGORY</button>
                  </div>
                  <div className="card-body text-start">
                    <h5 className="card-title fw-bold">
                      Product Title Goes Here
                    </h5>
                    <p className="card-text fs-6">BRAND</p>
                    <div className="d-flex justify-content-between titel">
                      <p className="fw-light text-decoration-line-through">
                        AED 32.00
                      </p>
                      <p className="fw-bold">AED 25.60</p>
                      <p className="sale fw-bold">30% Off</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
                <div className="card ">
                  <div className="img-sup">
                    <img
                      src="img/fashionnovablog.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <button className="fw-bold">CATEGORY</button>
                  </div>
                  <div className="card-body text-start">
                    <h5 className="card-title fw-bold">
                      Product Title Goes Here
                    </h5>
                    <p className="card-text fs-6">BRAND</p>
                    <div className="d-flex justify-content-between titel">
                      <p className="fw-light text-decoration-line-through">
                        AED 32.00
                      </p>
                      <p className="fw-bold">AED 25.60</p>
                      <p className="sale fw-bold">30% Off</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
                <div className="card ">
                  <div className="img-sup">
                    <img
                      src="img/fashionnovablog.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <button className="fw-bold">CATEGORY</button>
                  </div>
                  <div className="card-body text-start">
                    <h5 className="card-title fw-bold">
                      Product Title Goes Here
                    </h5>
                    <p className="card-text fs-6">BRAND</p>
                    <div className="d-flex justify-content-between titel">
                      <p className="fw-light text-decoration-line-through">
                        AED 32.00
                      </p>
                      <p className="fw-bold">AED 25.60</p>
                      <p className="sale fw-bold">30% Off</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img
            src="img/bannerfooter.webp"
            className="img-fluid mt-5 "
            style={{ width: "100%" }}
            alt="..."
          />

          {/* Top Sallers */}

          <div className="row d-flex justify-content-center">
            <h2 className="text-start mb-5">TOP SELLERS</h2>
            <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
              <div className="card ">
                <div className="img-sup">
                  <img
                    src="img/fashionnovablog.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <button className="fw-bold">CATEGORY</button>
                </div>
                <div className="card-body text-start">
                  <h5 className="card-title fw-bold">
                    Product Title Goes Here
                  </h5>
                  <p className="card-text fs-6">BRAND</p>
                  <div className="d-flex justify-content-between titel">
                    <p className="fw-light text-decoration-line-through">
                      AED 32.00
                    </p>
                    <p className="fw-bold">AED 25.60</p>
                    <p className="sale fw-bold">30% Off</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
              <div className="card ">
                <div className="img-sup">
                  <img
                    src="img/fashionnovablog.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <button className="fw-bold">CATEGORY</button>
                </div>
                <div className="card-body text-start">
                  <h5 className="card-title fw-bold">
                    Product Title Goes Here
                  </h5>
                  <p className="card-text fs-6">BRAND</p>
                  <div className="d-flex justify-content-between titel">
                    <p className="fw-light text-decoration-line-through">
                      AED 32.00
                    </p>
                    <p className="fw-bold">AED 25.60</p>
                    <p className="sale fw-bold">30% Off</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
              <div className="card ">
                <div className="img-sup">
                  <img
                    src="img/fashionnovablog.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <button className="fw-bold">CATEGORY</button>
                </div>
                <div className="card-body text-start">
                  <h5 className="card-title fw-bold">
                    Product Title Goes Here
                  </h5>
                  <p className="card-text fs-6">BRAND</p>
                  <div className="d-flex justify-content-between titel">
                    <p className="fw-light text-decoration-line-through">
                      AED 32.00
                    </p>
                    <p className="fw-bold">AED 25.60</p>
                    <p className="sale fw-bold">30% Off</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
              <div className="card ">
                <div className="img-sup">
                  <img
                    src="img/fashionnovablog.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <button className="fw-bold">CATEGORY</button>
                </div>
                <div className="card-body text-start">
                  <h5 className="card-title fw-bold">
                    Product Title Goes Here
                  </h5>
                  <p className="card-text fs-6">BRAND</p>
                  <div className="d-flex justify-content-between titel">
                    <p className="fw-light text-decoration-line-through">
                      AED 32.00
                    </p>
                    <p className="fw-bold">AED 25.60</p>
                    <p className="sale fw-bold">30% Off</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img
            src="img/bannerfooter.webp"
            className="img-fluid mt-5 mb-5"
            style={{ width: "100%" }}
            alt="..."
          />
        </div>
      </div>

      {/* AMBASSADORS */}
      <div className=" pt-5 pb-5">
        <div className="container text-center">
          <h2 className="text-start pb-5"> AMBASSADORS </h2>
          <div className="row  justify-content-between">
            <div className="col-lg-3">
              <div className=" shadow-sm  p-5">
                <svg
                  className="bd-placeholder-img rounded-circle"
                  width="140"
                  height="140"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Name Surname</title>
                  <rect
                    width="100%"
                    height="100%"
                    fill="var(--bs-secondary-color)"
                  ></rect>
                </svg>
                <h2 className="fw-semibold fs-4 py-2  ">Name Surname</h2>
                <div className="d-flex gap-3 pb-2 justify-content-center">
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-twitter"></i>
                  <i className="bi bi-youtube"></i>
                </div>
                <p>
                  <a className="btn btn-body rounded-5 border-dark" href="#">
                    @username
                  </a>
                </p>
                <button className=" fw-semibold shop-me"> SHOP WITH ME </button>
              </div>
            </div>
            <div className="col-lg-3">
              <div className=" shadow-sm  p-5">
                <svg
                  className="bd-placeholder-img rounded-circle"
                  width="140"
                  height="140"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Name Surname</title>
                  <rect
                    width="100%"
                    height="100%"
                    fill="var(--bs-secondary-color)"
                  ></rect>
                </svg>
                <h2 className="fw-semibold fs-4 py-2  ">Name Surname</h2>
                <div className="d-flex gap-3 pb-2 justify-content-center">
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-twitter"></i>
                  <i className="bi bi-youtube"></i>
                </div>
                <p>
                  <a className="btn btn-body rounded-5 border-dark" href="#">
                    @username
                  </a>
                </p>
                <button className=" fw-semibold shop-me"> SHOP WITH ME </button>
              </div>
            </div>
            <div className="col-lg-3">
              <div className=" shadow-sm  p-5">
                <svg
                  className="bd-placeholder-img rounded-circle"
                  width="140"
                  height="140"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Name Surname</title>
                  <rect
                    width="100%"
                    height="100%"
                    fill="var(--bs-secondary-color)"
                  ></rect>
                </svg>
                <h2 className="fw-semibold fs-4 py-2  ">Name Surname</h2>
                <div className="d-flex gap-3 pb-2 justify-content-center">
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-twitter"></i>
                  <i className="bi bi-youtube"></i>
                </div>
                <p>
                  <a className="btn btn-body rounded-5 border-dark" href="#">
                    @username
                  </a>
                </p>
                <button className=" fw-semibold shop-me"> SHOP WITH ME </button>
              </div>
            </div>
            <div className="col-lg-3">
              <div className=" shadow-sm  p-5">
                <svg
                  className="bd-placeholder-img rounded-circle"
                  width="140"
                  height="140"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Name Surname</title>
                  <rect
                    width="100%"
                    height="100%"
                    fill="var(--bs-secondary-color)"
                  ></rect>
                </svg>
                <h2 className="fw-semibold fs-4 py-2  ">Name Surname</h2>
                <div className="d-flex gap-3 pb-2 justify-content-center">
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-twitter"></i>
                  <i className="bi bi-youtube"></i>
                </div>
                <p>
                  <a className="btn btn-body rounded-5 border-dark" href="#">
                    @username
                  </a>
                </p>
                <button className=" fw-semibold shop-me"> SHOP WITH ME </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
    </>
  );
}
