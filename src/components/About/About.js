import React from 'react'

export default function About() {
    //for movement of animals in second section
    document.addEventListener("mousemove", parallax);
    function parallax(event) {
        this.querySelectorAll(".mouse").forEach((shift) => {
            const position = shift.getAttribute("value");
            const x = (window.innerWidth - event.pageX * position) / 90;
            const y = (window.innerHeight - event.pageY * position) / 90;

            shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }
    return (
        <>
            <div className="aboutImagesContainer section">
                <div class="mousemove">
                    <div class="animalPosition p1 mouse" value="2"><img src="./img/about/1.png" className="img-responsive" alt="" /></div>
                    <div class="animalPosition p2 mouse" value="3"><img src="./img/about/2.png" className="img-responsive" alt="" /></div>
                    <div class="animalPosition p3 mouse" value="4"><img src="./img/about/3.png" className="img-responsive" alt="" /></div>
                    <div class="animalPosition p4 mouse" value="3"><img src="./img/about/4.png" className="img-responsive" alt="" /></div>
                    <div class="animalPosition p5 mouse" value="5"><img src="./img/about/5.png" className="img-responsive" alt="" /></div>
                    <div class="animalPosition p6 mouse" value="3"><img src="./img/about/6.png" className="img-responsive" alt="" /></div>
                    <div class="animalPosition p7 mouse" value="3"><img src="./img/about/7.png" className="img-responsive" alt="" /></div>
                    <div class="animalPosition p8 mouse" value="4"><img src="./img/about/8.png" className="img-responsive" alt="" /></div>
                    <div class="animalPosition p9 mouse" value="3"><img src="./img/about/9.png" className="img-responsive" alt="" /></div>
                    <div class="animalPosition p10 mouse" value="3"><img src="./img/about/10.png" className="img-responsive" alt="" /></div>
                    <div class="animalPosition p11 mouse" value="5"><img src="./img/about/11.png" className="img-responsive" alt="" /></div>
                    <div class="animalPosition p12 mouse" value="3"><img src="./img/about/12.png" className="img-responsive" alt="" /></div>
                    <div class="animalPosition p13 mouse" value="3"><img src="./img/about/13.png" className="img-responsive" alt="" /></div>
                    <div class="animalPosition p14 mouse" value="6"><img src="./img/about/14.png" className="img-responsive" alt="" /></div>
                    <div class="animalPosition p15 mouse" value="3"><img src="./img/about/15.png" className="img-responsive" alt="" /></div>
                </div>
                <section className="aboutSection text-center d-flex align-items-center">
                    <div className="glow"></div>
                    <div className="container">
                        <div className="text"><h3>Coinhound is on a mission, <span>
                            to make the decentralized space fun, safer and smarter for everyone.</span></h3></div>
                    </div>
                </section>
            </div>
        </>
    )
}
