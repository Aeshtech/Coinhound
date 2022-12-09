import React from 'react'

export default function Navbar() {
    return (
        <section className="section home">
            {/* ---navbar--- */}
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#">
                        <img src="./img/logo.png" alt="" className='logo ms-3' />
                        <img src="./img/COINHOUND.png" alt="" className='logo-text ms-3' />
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
            <div className="container">
                <h1>Track profitable wallets, analyze tokens, use powerful and smart data to your advantage</h1>
                <p><a href="/#" className="a_link">UNLEASH THE HOUND</a></p>
                <div className="imageh">
                    <img src="./img/mainhound.svg" className="img-responsive" alt="" />
                </div>
            </div>
        </section>
    )
}
