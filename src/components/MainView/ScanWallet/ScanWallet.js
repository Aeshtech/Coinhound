import React from 'react'

export default function ScanWallet() {
    return (
        <div className='container mainView scanWallet d-flex align-items-center'>
            <div className="row">
                <div className="col-7">
                    <div className='d-flex align-items-start flex-column'>
                        <div className='d-flex align-items-center justify-content-start'>
                            <h1 className='d-inline-block me-3 mb-0'>Scan Wallet</h1>
                            <span class="badge text-dark border" style={{fontSize:"14px"}}>5 Treats</span>
                        </div>
                        <span className='subTitle'>Scan a token and see what kind of holder structure it has and make better investment decisions.</span>
                    </div>
                </div>

                <div className='col-5'>
                    <div className='svgDiv'>
                        <img src="./img/ScanWallet.svg" alt="" className='mw-100' />
                    </div>
                </div>

                <div className='col-12'>
                    <div className='walletDiv d-flex align-items-center'>
                        <input type="text" className='form-control bg-transparent' placeholder="Enter wallet address"/>
                        <button className='btn'>Connect Wallet</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
