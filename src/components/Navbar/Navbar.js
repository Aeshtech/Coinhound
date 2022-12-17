import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Context from '../../Contexts/Context';



export default function Navbar() {
    const { isWalletConnected, setIsWalletConnected } = useContext(Context);

    function resizeMainView() {
        const sideNavbar = document.getElementById('sideNavbar');
        const mainView = document.getElementsByClassName('mainView')[0];
        sideNavbar?.addEventListener('mouseover', () => mainView.style.paddingLeft = "268px");
        sideNavbar?.addEventListener('mouseleave', () => mainView.style.paddingLeft = "90px");
    }

    const location = useLocation();
    const dashboard = location.pathname === "/dashboard" ? "active" : "";
    const tracking = location.pathname === "/tracking" ? "active" : "";
    const preScanWallet = location.pathname === "/preScanWallet" ? "active" : "";
    const scanToken = location.pathname === "/scanToken" ? "active" : "";
    const trendAnalysis = location.pathname === "/trendAnalysis" ? "active" : "";

    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg dNavbar">
                    <div className="container-fluid">
                        <ul className="nav nav-column">
                            <Link className="nav-link p-0" to={"/splash"}>
                                <div className='brandName'>
                                    <img src="./img/COINHOUND.png" alt="" className='mw-100' />
                                </div>
                            </Link>
                        </ul>
                        <div>
                            <button type="button" id='connectWallet' onClick={() => setIsWalletConnected(!isWalletConnected)}>Connect Wallet</button>
                        </div>
                    </div>
                </nav>
                <div className='sideNavbar overflow-y-auto' id='sideNavbar' onMouseOver={() => { resizeMainView() }}>
                    <ul className="">
                        <div className='overflow-auto' style={{ maxHeight: "92%" }}>
                            {isWalletConnected ?
                                <span className='navCategory c1'>MY COINHOUND</span>
                                : null
                            }
                            <li className={isWalletConnected ? `l1 wConnected ${dashboard}` : `l1 ${dashboard}`}>
                                <Link to={"/dashboard"}>
                                    {isWalletConnected ?
                                        <img src="./img/icons/Clock.svg" alt="" className='mw-100 icon1' />
                                        :
                                        <img src="./img/icons/Wallet.svg" alt="" className='mw-100 icon1' />
                                    }
                                    <span className='nav-item'>Dashboard</span>
                                </Link>
                            </li>
                            {isWalletConnected ?
                                <>
                                    <li className={`li ${tracking}`}>
                                        <Link to={"/dashboard"}>
                                            <img src="./img/icons/Tracking.svg" alt="" className='mw-100 icon1' />
                                            <span className='nav-item'>Tracking</span>
                                        </Link>
                                    </li>
                                    <span className='navCategory c2'>TOOLS</span>
                                </>
                                : null
                            }
                            <li className={`l2 ${preScanWallet}`}>
                                <Link to={"/preScanWallet"}>
                                    {isWalletConnected ?
                                        <img src="./img/icons/ScanWallet2.svg" alt="" className='mw-100 icon2' />
                                        :
                                        <img src="./img/icons/wallet.svg" alt="" className='mw-100 icon2' />
                                    }
                                    <span className='nav-item'>Scan Wallet</span>
                                </Link>
                            </li>
                            <li className={`l3 ${scanToken}`}>
                                <Link to={"/scanToken"}>
                                    {isWalletConnected ?
                                        <img src="./img/icons/ScanToken2.svg" alt="" className='mw-100 icon3' />
                                        :
                                        <img src="./img/icons/dollar.svg" alt="" className='mw-100 icon3' />
                                    }
                                    <span className='nav-item'>Scan Token</span>
                                </Link>
                            </li>
                            <li className={`l4 ${trendAnalysis}`}>
                                <Link to={"/trendAnalysis"}>
                                    {isWalletConnected ?
                                        <img src="./img/icons/Trending.svg" alt="" className='mw-100 icon4' />
                                        :
                                        <img src="./img/icons/vector2.svg" alt="" className='mw-100 icon4' />
                                    }
                                    <span className='nav-item'>Trend Analysis</span>
                                </Link>
                            </li>
                            <li className='l5'>
                                <Link>
                                    {isWalletConnected ?
                                        <img src="./img/icons/ScanBlockchain.svg" alt="" className='mw-100 icon5' />
                                        :
                                        <img src="./img/icons/dollar.svg" alt="" className='mw-100 icon5' />
                                    }
                                    <span className='nav-item'>Scan Blockchain</span>
                                </Link>
                            </li>
                            {isWalletConnected ?
                                <span className='navCategory c3'>DOG HOUSE</span>
                                : null
                            }
                            {isWalletConnected ?
                                <li className="l6">
                                    <Link>
                                        <img src="./img/icons/Bone.svg" alt="" className='mw-100 icon6' />
                                        <span className='nav-item'>Stake CND</span>
                                    </Link>
                                </li>
                                :
                                <li className='l6 mt-5'>
                                    <Link>
                                        <img src="./img/icons/dog.svg" alt="" className='mw-100 icon6' />
                                        <span className='nav-item'>Treats</span>
                                    </Link>
                                </li>
                            }
                            <li className='l7'>
                                <Link>
                                    <img src="./img/icons/vector1.svg" alt="" className='mw-100 icon7' />
                                    <span className='nav-item'> {isWalletConnected ? "Buy Collar" : "Collar"}</span>
                                </Link>
                            </li>
                        </div>
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
