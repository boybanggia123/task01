export default function Footer() {
  return (
    <>
      <div className="bg-secondary-subtle">
        <div className="container fw-medium ">
          <footer className="pt-5">
            <div className="container">
              <div className="row">
                <div className="col-6 col-md-2 mb-2">
                  <h2>Logo</h2>
                </div>
                <div className="col-6 col-md-2 mb-2">
                  <h5>Section</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">
                        Home
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">
                        Features
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">
                        FAQs
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">
                        About
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-md-2 mb-2">
                  <h5>Section</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">
                        Home
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">
                        Features
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">
                        FAQs
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">
                        About
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-md-2 mb-2">
                  <h5>Section</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">
                        Home
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">
                        Features
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">
                        FAQs
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">
                        About
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-4 mb-2">
                  <form>
                    <h5>Subscribe to our newsletter</h5>
                    <p>Monthly digest of what's new and exciting from us.</p>
                    <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                      <label className="visually-hidden">Email address</label>
                      <input
                        id="newsletter1"
                        type="text"
                        className="form-control"
                        placeholder="Email address"
                      />
                      <button className="btn btn-primary" type="button">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center border-top pt-4">
                <p>© 2024 Company, Inc. All rights reserved.</p>
                <ul className="list-unstyled d-flex">
                  <li className="ms-3">
                    <a className="link-body-emphasis" href="#">
                      <i className="bi bi-credit-card-2-front-fill fs-2"></i>
                    </a>
                  </li>
                  <li className="ms-3">
                    <a className="link-body-emphasis" href="#">
                      <i className="bi bi-paypal fs-2"></i>
                    </a>
                  </li>
                  <li className="ms-3">
                    <a className="link-body-emphasis" href="#">
                      <i className="bi bi-badge-vr-fill fs-2"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
