import React, { useContext} from 'react'
import Context from '../../../Contexts/Context'
import Navbar from '../../Navbar/Navbar'

export default function ScanWallet() {
    const {isWalletConnected} = useContext(Context);
    return (
        <>
        <Navbar/>
        <div className='container mainView scanWallet d-flex align-items-center'>
            <div className="row">
                <div className="col-7">
                    <div className='d-flex align-items-start flex-column'>
                        <div className='d-flex align-items-center justify-content-start'>
                            <h1 className='d-inline-block me-3 mb-0'>Scan Wallet</h1>
                            <span className="badge text-dark border" style={{fontSize:"14px"}}>5 Treats</span>
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
                        {
                            isWalletConnected?
                            <button className='btn bg-green'>Scan Now</button>
                            :<button className='btn'>Connect Wallet</button>
                        }
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}
