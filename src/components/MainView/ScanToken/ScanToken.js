import React, { useContext } from 'react'
import Context from '../../../Contexts/Context'

export default function ScanToken() {
    const { isWalletConnected } = useContext(Context);

    return (
        <div className='container mainView scanWallet d-flex align-items-center'>
            <div className="row">
                <div className="col-7">
                    <div className='d-flex align-items-start flex-column'>
                        <div className='d-flex align-items-start flex-column'>
                            <h1 className='me-3 mb-0'>Scan Token</h1>
                            <div>
                                <span className="badge text-dark border me-2" style={{ fontSize: "14px",background:"#EAEAEA"}}>COSTS 5 TREATS</span>
                                <span className="badge border" style={{ fontSize: "14px", background:"#CFCBFF", color:"#3A1D6B"}}>16 TREATS AVAILABLE</span>
                            </div>
                        </div>
                        <span className='subTitle mt-3'>Scan a token and see what kind of holder structure it has and make better investment decisions.</span>
                    </div>
                </div>

                <div className='col-5'>
                    <div className='svgDiv'>
                        <img src="./img/ScanToken.svg" alt="" className='mw-100' />
                    </div>
                </div>

                <div className='col-12'>
                    <div className='walletDiv d-flex align-items-center'>
                        <input type="text" className='form-control bg-transparent' placeholder="Enter token address" />
                        {
                            isWalletConnected ?
                                <button className='btn bg-green'>Scan Now</button>
                                : <button className='btn'>Connect Wallet</button>
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}
