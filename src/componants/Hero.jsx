import React from 'react'

const Hero = () => {
  return (
    <section id='hero'>
      <div>
        <h1>
            Macbook Pro
        </h1>
        <img src="/title.png" alt="Title" />
        <video src="/videos/hero.mp4" autoPlay muted playsInline />
        <button>Buy</button>
        <p>From $1599 or 120/mo for 12 month</p>
      </div>
    </section>
  )
}

export default Hero