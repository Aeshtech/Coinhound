import React from 'react'

export default function Splash() {
    return (
        <div className='container mainView splashScreen d-flex align-items-center'>
           <div className="row align-items-center h-100">
            <div className="col">
                <div className='mainhound'>
                    <img src="./img/mainhound.svg" alt="" className='mw-100' />
                </div>
                <div className='splashtitle d-flex justify-content-center align-items-center flex-column'>
                    <span>GET READY TO</span>
                    <h1>Unleash the Hound</h1>
                </div>
            </div>
           </div>
        </div>

    )
}
