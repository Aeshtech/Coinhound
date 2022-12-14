import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {


    document.addEventListener("load", () => {
        console.log("ashish")
        const sideNavbar = document.getElementById('sideNavbar');
        console.log(sideNavbar);

        const mainView = document.getElementsByClassName('mainView')[0];
        console.log(mainView);

        sideNavbar?.addEventListener('mouseover', () => mainView.style.marginLeft = "268px!important");
        sideNavbar?.addEventListener('mouseleave', () => mainView.style.marginLeft = "90px!important");
    });

    return (
        <>

            <div>
                <nav class="navbar navbar-expand-lg dNavbar">
                    <div className="container-fluid">
                        <ul class="nav nav-column">
                            <a class="nav-link p-0" href="/#">
                                <div className='brandName'>
                                    <img src="./img/COINHOUND.png" alt="" className='mw-100' />
                                </div>
                            </a>
                        </ul>
                        <div>
                            <button type="button" id='connectWallet'>Connect Wallet</button>
                        </div>
                    </div>
                </nav>
                <div className='sideNavbar' id='sideNavbar'>
                    <ul className="">
                        <li className='l1'>
                            <Link to={"/"}>
                                <img src="./img/icons/wallet.svg" alt="" className='mw-100 icon1' />
                                <span className='nav-item'>Dashboard</span>
                            </Link>
                        </li>
                        <li className='l2'>
                            <Link to={"/scanWallet"}>
                                <img src="./img/icons/wallet.svg" alt="" className='mw-100 icon2' />
                                <span className='nav-item'>Scan Wallet</span>
                            </Link>
                        </li>
                        <li className='l3'>
                            <Link>
                                <img src="./img/icons/dollar.svg" alt="" className='mw-100 icon3' />
                                <span className='nav-item'>Scan Token</span>
                            </Link>
                        </li>
                        <li className='l4'>
                            <Link>
                                <img src="./img/icons/vector2.svg" alt="" className='mw-100 icon4' />
                                <span className='nav-item'>Trend Analysis</span>
                            </Link>
                        </li>
                        <li className='l5'>
                            <Link>
                                <img src="./img/icons/dollar.svg" alt="" className='mw-100 icon5' />
                                <span className='nav-item'>Scan Blockchain</span>
                            </Link>
                        </li>
                        <li className='l6'>
                            <Link>
                                <img src="./img/icons/dog.svg" alt="" className='mw-100 icon6' />
                                <span className='nav-item'>Treats</span>
                            </Link>
                        </li>
                        <li className='l7'>
                            <Link>
                                <img src="./img/icons/vector1.svg" alt="" className='mw-100 icon7' />
                                <span className='nav-item'>Collar</span>
                            </Link>
                        </li>
                        <li className='l8'>
                            <Link>
                                <img src="./img/icons/logout.svg" alt="" className='mw-100 icon8' />
                                <span className='nav-item'>Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    )
}
