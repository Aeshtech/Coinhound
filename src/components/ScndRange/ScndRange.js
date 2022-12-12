import React from 'react'

export default function ScndRange() {

    // -----------------------input range custom styling-------------------
    // const slider = document.getElementById("myRange1")
    // const min = slider.value;
    // const max = slider?.max
    // const value = slider?.value

    // slider.style.background = `linear-gradient(to right, red 0%, red ${(value - min) / (max - min) * 100}%, #DEE2E6 ${(value - min) / (max - min) * 100}%, #DEE2E6 100%)`

    // slider.oninput = function () {
    //     this.style.background = `linear-gradient(to right, red 0%, red ${(this.value - this.min) / (this.max - this.min) * 100}%, #DEE2E6 ${(this.value - this.min) / (this.max - this.min) * 100}%, #DEE2E6 100%)`
    // };
    // ----------------------------------------------------------------------


    return (
        <>
            <section className="scndSection section d-flex align-items-center">
                <div className="container">
                    <h3 className='first'>Stake CND, earn Treats</h3>
                    <span className='first text-center'>
                        Making Coinhound accessible to all with <br /> dynamic staking and access.
                    </span>

                    <div className="container-fluid scndRangeBox ">
                        <div className="row d-flex align-items-center">
                            <div className="col-sm-8">
                                <span className="rangeLabel1">AMOUNT OF $CND STAKED</span>
                                <div className="rangeHandle">
                                    <input type="range" min="1" max="5" className="in_range" id="myRange1" />
                                    <div className="cnd d-flex">
                                        <div className="col">0 CND</div>
                                        <div className="col">100 CND</div>
                                        <div className="col">1000 CND</div>
                                        <div className="col">10,000 CND</div>
                                        <div className="col">100,000 CND</div>
                                    </div>
                                </div>
                                <span className="rangeLabel2">DURATION OF $CND STAKED</span>
                                <div className="rangeHandle">
                                    <input type="range" min="1" max="4" className="in_range" id="myRange2" />
                                    <div className="cnd d-flex">
                                        <div className="col">0 MONTHS</div>
                                        <div className="col">1 MONTH</div>
                                        <div className="col">6 MONTHS</div>
                                        <div className="col">1 YEAR</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="treats text-center">
                                    <img src="./img/dogbyte.png" className="img-responsive" alt="" />
                                    <h3>5
                                        <span>Treats per day</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="scndRangeBox2">
                        <h1>What are Treats and why do I need them?</h1>
                        <p>
                            Coinhound dApp functions require Treats as an in-dApp currency that you acquire by comitting your stake to Coinhound ecosystem. Think of Treats as food for your hound that it wants to perform several tasks for you such as scanning wallets and tokens. We will be bringing more utility for Treats in future.
                        </p>
                        <p className='second'>
                            <a href="/#" className="greencolor">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                    <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
                                </svg>
                                Read Coinhound Whitepaper to learn all about treats.
                            </a>
                        </p>
                    </div>

                </div>
            </section>
        </>
    )
}
