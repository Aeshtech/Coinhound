import React from 'react'
import Navbar from '../../Navbar/Navbar'
import { MdContentCopy } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
export default function HolderStructure() {
  return (
    <>
            <Navbar />
            <div className='container-fluid mainView holderStructure overflow-auto'>
                <div className="row mt-4">

                    <div className='col-5'>
                        <div className='svgDiv'>
                            <img src="./img/shiba.svg" alt="" className='mw-100 d-block m-auto' />
                        </div>
                    </div>

                    <div className="col-7">
                        <div className='d-flex align-items-start justify-content-start flex-column w-100'>
                            <div className='walletAddress'>
                                <input type="text" readOnly value="0x7d7366e3f4951ad999fc8d29de3444a1c8a0e091" className='form-control bg-transparent border-0' />
                                <MdContentCopy className="copy" />
                            </div>
                            <div className='d-flex align-items-center mt-2'>
                                <h1 className='d-inline-block me-3 mb-0'>Adult Hound</h1>
                                <span className="badge text-dark border" style={{ fontSize: "14px" }}>5 Treats</span>
                            </div>
                            <span className='subTitle'>This wallet has made a profit of over 361% in 6 months with a volume of $3200 on average.</span>
                            <button className='btn bg-green text-white trackWallet'>TRACK THIS WALLET
                                <div className='position-relative ms-2 d-inline'>
                                    <AiOutlineQuestionCircle />
                                    <div></div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>


                <div className='row justify-content-left'>
                <div className="col-12 ps-5">
                    <h4 className='holdersTitle'>Holder structure</h4>
                </div>
                    <div className="col-12 col-md-6 col-lg-4 ps-5 pe-3 mb-4 cardsWrapper">
                        <div className='card flex-row justify-content-around align-items-center'>
                            <img src="./img/CoinHound.svg" alt="" className='mw-100 d-inline'/>
                            <div className='d-inline'>
                                <h5>56%</h5>
                                <h6>Adult Hounds</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 px-3 mb-4 cardsWrapper">
                        <div className='card flex-row justify-content-around align-items-center'>
                            <img src="./img/CoinHound.svg" alt="" className='mw-100 d-inline'/>
                            <div className='d-inline'>
                                <h5>56%</h5>
                                <h6>Adult Hounds</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 ps-3 pe-5 mb-4 cardsWrapper">
                        <div className='card flex-row justify-content-around align-items-center'>
                            <img src="./img/CoinHound.svg" alt="" className='mw-100 d-inline'/>
                            <div className='d-inline'>
                                <h5>56%</h5>
                                <h6>Adult Hounds</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 ps-5 pe-3 mb-4 cardsWrapper">
                        <div className='card flex-row justify-content-around align-items-center'>
                            <img src="./img/CoinHound.svg" alt="" className='mw-100 d-inline'/>
                            <div className='d-inline'>
                                <h5>56%</h5>
                                <h6>Adult Hounds</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 px-3 mb-4 cardsWrapper">
                        <div className='card flex-row justify-content-around align-items-center'>
                            <img src="./img/CoinHound.svg" alt="" className='mw-100 d-inline'/>
                            <div className='d-inline'>
                                <h5>56%</h5>
                                <h6>Adult Hounds</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 ps-3 pe-5 mb-4 cardsWrapper">
                        <div className='card flex-row justify-content-around align-items-center'>
                            <img src="./img/CoinHound.svg" alt="" className='mw-100 d-inline'/>
                            <div className='d-inline'>
                                <h5>56%</h5>
                                <h6>Adult Hounds</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
