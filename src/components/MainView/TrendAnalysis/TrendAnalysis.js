import React from 'react'
import Navbar from '../../Navbar/Navbar';
import { MdContentCopy } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
export default function TrendAnalysis() {

    return (
        <>
            <Navbar />
            <div className='container-fluid mainView trend overflow-auto'>
                <div className="row mt-4">

                    <div className='col-5'>
                        <div className='svgDiv'>
                            <img src="./img/CoinHound.svg" alt="" className='mw-100' />
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


                <div className='row justify-content-center mt-5'>
                    <div className="col-12 col-md-6 col-lg-4 px-5 listWrapper">
                        <h4>Current holdings</h4>
                        <ol class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-start header">
                                <span>COIN NAME</span>
                                <span>PROFIT / LOSS</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start ps-0">
                                <div class="ms-2 me-auto">
                                    <div class="d-flex align-items-center">
                                        <img src="./img/icons/Star.svg" alt="" className='mw-100 me-2' />
                                        <span className='span1'>Baby Doge</span>
                                    </div>
                                </div>
                                <span class="span2">352%</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start ps-0">
                                <div class="ms-2 me-auto">
                                    <div class="d-flex align-items-center">
                                        <img src="./img/icons/Star.svg" alt="" className='mw-100 me-2' />
                                        <span className='span1'>Shiba Inu</span>
                                    </div>
                                </div>
                                <span class="span2">1981%</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start ps-0">
                                <div class="ms-2 me-auto">
                                    <div class="d-flex align-items-center">
                                        <img src="./img/icons/Star.svg" alt="" className='mw-100 me-2' />
                                        <span className='span1'>Baby Doge</span>
                                    </div>
                                </div>
                                <span class="span2">352%</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start ps-0">
                                <div class="ms-2 me-auto">
                                    <div class="d-flex align-items-center">
                                        <img src="./img/icons/Star.svg" alt="" className='mw-100 me-2' />
                                        <span className='span1'>Shiba Inu</span>
                                    </div>
                                </div>
                                <span class="span2">1981%</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start ps-0">
                                <div class="ms-2 me-auto">
                                    <div class="d-flex align-items-center">
                                        <img src="./img/icons/Star.svg" alt="" className='mw-100 me-2' />
                                        <span className='span1'>Shiba Inu</span>
                                    </div>
                                </div>
                                <span class="span2">1981%</span>
                            </li>
                        </ol>
                    </div>


                    <div className="col-12 col-md-6 col-lg-4 px-5 listWrapper">
                        <h4>Current holdings</h4>
                        <ol class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-start header">
                                <span>COIN NAME</span>
                                <span>PROFIT / LOSS</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start ps-0">
                                <div class="ms-2 me-auto">
                                    <div class="d-flex align-items-center">
                                        <img src="./img/icons/Star.svg" alt="" className='mw-100 me-2' />
                                        <span className='span1'>Baby Doge</span>
                                    </div>
                                </div>
                                <span class="span2">352%</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start ps-0">
                                <div class="ms-2 me-auto">
                                    <div class="d-flex align-items-center">
                                        <img src="./img/icons/Star.svg" alt="" className='mw-100 me-2' />
                                        <span className='span1'>Shiba Inu</span>
                                    </div>
                                </div>
                                <span class="span2">1981%</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start ps-0">
                                <div class="ms-2 me-auto">
                                    <div class="d-flex align-items-center">
                                        <img src="./img/icons/Star.svg" alt="" className='mw-100 me-2' />
                                        <span className='span1'>Baby Doge</span>
                                    </div>
                                </div>
                                <span class="span2">352%</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start ps-0">
                                <div class="ms-2 me-auto">
                                    <div class="d-flex align-items-center">
                                        <img src="./img/icons/Star.svg" alt="" className='mw-100 me-2' />
                                        <span className='span1'>Shiba Inu</span>
                                    </div>
                                </div>
                                <span class="span2">1981%</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start ps-0">
                                <div class="ms-2 me-auto">
                                    <div class="d-flex align-items-center">
                                        <img src="./img/icons/Star.svg" alt="" className='mw-100 me-2' />
                                        <span className='span1'>Shiba Inu</span>
                                    </div>
                                </div>
                                <span class="span2">1981%</span>
                            </li>
                        </ol>
                    </div>


                    <div className="col-12 col-md-6 col-lg-4 px-5 listWrapper">
                        <h4>Current holdings</h4>
                        <ol class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-start header">
                                <span>COIN NAME</span>
                                <span>PROFIT / LOSS</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start ps-0">
                                <div class="ms-2 me-auto">
                                    <div class="d-flex align-items-center">
                                        <img src="./img/icons/Star.svg" alt="" className='mw-100 me-2' />
                                        <span className='span1'>Baby Doge</span>
                                    </div>
                                </div>
                                <span class="span2">352%</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start ps-0">
                                <div class="ms-2 me-auto">
                                    <div class="d-flex align-items-center">
                                        <img src="./img/icons/Star.svg" alt="" className='mw-100 me-2' />
                                        <span className='span1'>Shiba Inu</span>
                                    </div>
                                </div>
                                <span class="span2">1981%</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start ps-0">
                                <div class="ms-2 me-auto">
                                    <div class="d-flex align-items-center">
                                        <img src="./img/icons/Star.svg" alt="" className='mw-100 me-2' />
                                        <span className='span1'>Baby Doge</span>
                                    </div>
                                </div>
                                <span class="span2">352%</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start ps-0">
                                <div class="ms-2 me-auto">
                                    <div class="d-flex align-items-center">
                                        <img src="./img/icons/Star.svg" alt="" className='mw-100 me-2' />
                                        <span className='span1'>Shiba Inu</span>
                                    </div>
                                </div>
                                <span class="span2">1981%</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start ps-0">
                                <div class="ms-2 me-auto">
                                    <div class="d-flex align-items-center">
                                        <img src="./img/icons/Star.svg" alt="" className='mw-100 me-2' />
                                        <span className='span1'>Shiba Inu</span>
                                    </div>
                                </div>
                                <span class="span2">1981%</span>
                            </li>
                        </ol>

                    </div>


                </div>
            </div>
        </>
    )
}
