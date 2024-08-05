
export default function Header(){
    return(
        <>
             <div className="bg-body-tertiary">
    <header className="container d-flex flex-wrap align-items-center justify-content-between py-3">
  <div className="col-md-3 mb-2 mb-md-0">
    <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
      <h2>logo</h2>
    </a>
  </div>
  <div className="col-md-6  d-flex justify-content-center">
    <form className="form-search " role="search">
      <div className="position-relative">
        <input className=" me-2" type="search" placeholder="Search" aria-label="Search"/>
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
      <div className="ps-4">
        <i className="bi bi-person-circle fs-5"></i>
        <span className="ps-2">User</span>
      </div>
    </div>
  </div>
</header>

    </div>
    <nav className="navbar navbar-expand-lg bg-body shadow p-3   rounded fw-medium">
  <div className="container ">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className=" sellmain collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <button className="nav-link active dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"  type="button" aria-current="page" >
            
            AllBANDS</button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
           </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">SKINCARE</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">MAKE UP</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">HAIR CARE</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">BATH & BODY</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">BUEAUTY SUPPEMENTS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">PROMOS</a>
        </li>
      </ul>
      <button type="button" className=" sell fw-medium   "> SELL WITH US</button>
    </div>
  </div>
</nav>
        
        </>
    )
}