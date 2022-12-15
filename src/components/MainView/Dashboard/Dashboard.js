import React from 'react'

export default function Dashboard() {
    return (
        <div className='container mainView dashboard d-flex align-items-start justify-content-center'>
            <div className="row ms-4">
                <div className='col-12 mt-5'>
                    <h1>Greetings explorer</h1>
                    <span className='subTitle'>
                        Send your hound and learn who a wallet belongs to, your hound uses 1 Treat to perform this task.
                    </span>
                </div>
                <div className='col-12 col-md-6 mt-5'>
                    <div className='dashCard1'>
                        <h3>32 Treats available</h3>
                        <button className='btn'>STAKE CND TO EARN MORE</button>
                    </div>
                </div>
                <div className='col-12 col-md-6 mt-5'>
                    <div className='dashCard2'>
                        <h3>3/6 Collars available</h3>
                        <button className='me-3 btn'>UNBIND</button>
                        <button className='btn'>BUY MORE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
