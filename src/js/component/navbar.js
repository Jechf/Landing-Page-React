import React from 'react'

export const Navbarweb = () => {
  return (
  
<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">React Landing Page</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fa-solid fa-jedi"></i>
    </button>

    <div className="collapse navbar-collapse  justify-content-end" id="navbarScroll">
    <div className=" justify-content-end">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
    </div>

    </div>
  </div>
</nav>


  )
}
