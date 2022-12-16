import {
    FaTelegramPlane,
    FaTwitter,
    FaDiscord,
    FaMediumM
} from 'react-icons/fa'


function Footer() {
    return (
        <>
            <section className="footerSection section d-flex align-items-center">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-sm-5">
                            <div className="big-dog">
                                <img src="./img/big-dog.svg" className="img-responsive" alt="" />
                            </div>
                        </div>
                        <div className="col-sm-7">
                            <div className="footer_content">
                                <h3 className="text-left">Master the decentralized world with Coinhound</h3>
                                <p>We love to discuss and explore new ideas so hop in on one of our social media group and help Coinhound make the decentralized space better for all.</p>
                                <div className="socialIcons">
                                    <a href="/#"><FaTelegramPlane /></a>
                                    <a href="/#"><FaTwitter /></a>
                                    <a href="/#"><FaDiscord /></a>
                                    <a href="/#">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z" />
                                        </svg>
                                    </a>
                                    <a href="/#"><FaMediumM /></a>
                                </div>
                                <div className="infom">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="contact_box">
                                                <span>CONTACT US</span>
                                                <p>woof@coinhound.com</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="contact_box">
                                                <span>GROW WITH US</span>
                                                <p>investments@coinhound.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="partner">
                                    <a href="/#"><img src="./img/coinhoundFooter.png" className="img-responsive" alt="" /></a>
                                    <a href="/#"><img src="./img/binanceFooter.png" className="img-responsive" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;