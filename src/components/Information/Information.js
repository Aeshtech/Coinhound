import React from 'react'

export default function Information() {
    return (
        <section className="infoSection section text-start d-flex align-items-center">
            <img src="./img/trackingHound1.svg" className="img-responsive right_image" alt="" />
            <div className="clearboth"></div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-5">
                        <h3 className='text-dark text-start'> Coinhound is smart <span className='w-100'> It scans, tracks and<br />classifies data for you.</span></h3>
                        <p>Coinhound tracks data all over the crypto network and translates it to easily understand language that people including traders, investors and researchers can use to get an advantage.</p>
                    </div>
                </div>
                <div className="borderboxes">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="borderbox">
                                <h4>500,000+</h4>
                                <p>Wallets to be scanned daily</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="borderbox">
                                <h4>3,500,000+</h4>
                                <p>
                                    Transactions to be tracked</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
