"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const searchParams = useSearchParams();
  const [Supuser, setSupuser] = useState(false);

  const hendleUserClick = () => {
    setSupuser(!Supuser);
  };

  useEffect(() => {
    // Đặt trạng thái thành 'unsupuser' khi URL thay đổi
    const handleRouteChange = () => {
      setSupuser(false);
    };

    // Theo dõi sự thay đổi của searchParams
    handleRouteChange(); // Đảm bảo trạng thái được đặt đúng khi component được gắn
  }, [searchParams]);

  return (
    <>
      <div className="bg-body-tertiary ">
        <header className="container d-flex flex-wrap align-items-center justify-content-between py-3">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex link-body-emphasis text-decoration-none"
            >
              <h2>logo</h2>
            </a>
          </div>
          <div className="col-md-6  d-flex justify-content-center">
            <form className="form-search " role="search">
              <div className="position-relative">
                <input
                  className=" me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <i className="bi bi-search position-absolute"></i>
              </div>
            </form>
          </div>
          <div className="col-md-3 d-flex justify-content-end">
            <div className="d-flex justify-content-center align-items-center">
              <div className="border-end border-black pe-4">
                <i className="bi bi-cart3 fs-5"></i>
                <span className="ps-2">Cart</span>
              </div>
              <div className="ps-4 user" onClick={hendleUserClick}>
                <i className="bi bi-person-circle fs-5"></i>
                <button className="ps-2 button-h">User</button>

                <div
                  className={`${Supuser ? "supuser" : "unsupuser"}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <form className="form shadow-lg mt-1 ">
                    <h2 className="text-center ">SIGN IN</h2>
                    <div className="flex-column">
                      <label>Email </label>
                    </div>
                    <div className="inputForm">
                      <svg
                        height="20"
                        viewBox="0 0 32 32"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Layer_3" data-name="Layer 3">
                          <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                        </g>
                      </svg>
                      <input
                        type="text"
                        className="input"
                        placeholder="Enter your Email"
                      />
                    </div>

                    <div className="flex-column">
                      <label>Password </label>
                    </div>
                    <div className="inputForm">
                      <svg
                        height="20"
                        viewBox="-64 0 512 512"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
                        <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
                      </svg>
                      <input
                        type="password"
                        className="input"
                        placeholder="Enter your Password"
                      />
                      <svg
                        viewBox="0 0 576 512"
                        height="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path>
                      </svg>
                    </div>

                    <div className="flex-row">
                      <div>
                        <input type="checkbox" />
                        <label>Remember me </label>
                      </div>
                      <span className="span">Forgot password?</span>
                    </div>
                    <button className="button-submit">Sign In</button>

                    <p className="p line">Or With</p>

                    <div className="">
                      <button className="btn-h google">
                        <svg
                          version="1.1"
                          width="20"
                          id="Layer_1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 512 512"
                        >
                          <path
                            style={{ fill: "#FBBB00" }}
                            d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
	c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
	C103.821,274.792,107.225,292.797,113.47,309.408z"
                          ></path>
                          <path
                            style={{ fill: "#518EF8" }}
                            d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
	c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
	c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
                          ></path>
                          <path
                            style={{ fill: "#28B446" }}
                            d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
	c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
	c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
                          ></path>
                          <path
                            style={{ fill: "#F14336" }}
                            d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
	c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
	C318.115,0,375.068,22.126,419.404,58.936z"
                          ></path>
                        </svg>
                        Google
                      </button>
                      <button className="btn-h facebook">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          width="20"
                          viewBox="0 0 24 24"
                          fill="#1877F2"
                        >
                          <path d="M22.675 0H1.325C.594 0 0 .594 0 1.325v21.351C0 23.406.594 24 1.325 24h11.494V14.706h-3.13v-3.624h3.13V8.413c0-3.1 1.893-4.786 4.658-4.786 1.325 0 2.465.099 2.798.143v3.24l-1.92.001c-1.505 0-1.796.715-1.796 1.764v2.31h3.587l-.467 3.624h-3.12V24h6.117C23.406 24 24 23.406 24 22.675V1.325C24 .594 23.406 0 22.675 0z" />
                        </svg>
                        Facebook
                      </button>
                    </div>
                    <p className="p">
                      Don't have an account?{" "}
                      <Link href="/dangki" className="span">
                        Sign Up
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <nav className="navbar navbar-expand-lg bg-body shadow p-3   rounded fw-medium ">
        <div className="container  ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" sellmain collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <button
                  className="nav-link active dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  type="button"
                  aria-current="page"
                >
                  AllBANDS
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  SKINCARE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  MAKE UP
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  HAIR CARE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  BATH & BODY
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  BUEAUTY SUPPEMENTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  PROMOS
                </a>
              </li>
            </ul>
            <button type="button" className=" sell fw-medium   ">
              {" "}
              SELL WITH US
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
