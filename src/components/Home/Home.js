import React from 'react'

export default function Home() {
  return (
    <>
      <section className="section home">
        {/* ---navbar--- */}
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand me-0" href="/#">
              <img src="./img/logo.png" alt="" className='logo' />
              <img src="./img/COINHOUND.png" alt="" className='logo-text' />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/#">WHITEPAPER</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">FEATURES</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#" tabIndex="-1" aria-disabled="true">CND TOKEN</a>
                </li>
              </ul>
              <form className="d-flex">
                <button className="btn btn-success navBtn">ACCESS DAPP</button>
              </form>
            </div>
          </div>
        </nav>

        {/* ---hero section--- */}
        <div className="container heroSection">
          <div className='row'>
            <div className='title text-center mx-auto'>
              <h1>Track profitable wallets, analyze tokens, use powerful and smart data to your advantage</h1>
              <p className='mt-3'><a href="/#" className="text-dark subTitle">UNLEASH THE HOUND {'>'}</a></p>
            </div>
            <div className="hero">
              <img src="./img/mainhound.svg" className="img-responsive w-100 d-block mx-auto" alt="" />
            </div>
          </div>
        </div>
        
      </section>
    </>
  )
}
