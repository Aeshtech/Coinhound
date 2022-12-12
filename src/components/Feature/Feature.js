import React from 'react'

export default function Feature() {
  return (
    <section className="featureSection section text-center d-flex align-items-center" id="feature">
      <div className="container">
        <h4>COINHOUND FEATURES</h4>

        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>

          <div class="carousel-inner"> 
            <div class="carousel-item active" data-bs-interval="10000000">
              <img src="./img/slides/slide1.svg" class="d-block mw-100" alt="" />
                <div class="carousel-caption d-none d-md-block">
                  <h1>Scan and track wallets</h1>
                  <p>Get the upper edge by learning before everyone else when big players make a move. Scan wallets to see how profit is being made and track the most profitable ones so you never miss an exciting trade again.</p>
                </div>
            </div>
            <div class="carousel-item">
              <img src="./img/slides/slide2.svg" class="d-block mw-100" alt="" />
                <div class="carousel-caption d-none d-md-block">
                  <h1>Scan and track tokens</h1>
                  <p>Get the upper edge by learning before everyone else when big players make a move. Scan wallets to see how profit is being made and track the most profitable ones so you never miss an exciting trade again.</p>
                </div>
            </div>
            <div class="carousel-item">
              <img src="./img/slides/slide3.svg" class="d-block mw-100" alt="" />
                <div class="carousel-caption d-none d-md-block">
                  <h1>Data that is fun to devour</h1>
                  <p>Get the upper edge by learning before everyone else when big players make a move. Scan wallets to see how profit is being made and track the most profitable ones so you never miss an exciting trade again.</p>
                </div>
            </div>
            <div class="carousel-item">
              <img src="./img/slides/slide4.svg" class="d-block mw-100" alt="" />
                <div class="carousel-caption d-none d-md-block">
                  <h1>Learn from deep insights</h1>
                  <p>Get the upper edge by learning before everyone else when big players make a move. Scan wallets to see how profit is being made and track the most profitable ones so you never miss an exciting trade again.</p>
                </div>
            </div>
          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  )
}
