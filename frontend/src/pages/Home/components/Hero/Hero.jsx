import React from 'react'
import "./hero.scss"
const Hero = () => {
  return (
    <div className='mainhero'>
        <div className='containerhero'>
            <img className='heroimage' src="https://preview.colorlib.com/theme/dealers/images/new/person_transparent.png.webp" alt="" />
            <div className='leftside'>
                <div className='mytexts'>
                    <div className='mytitle'>MADEWELL</div>
                    <div className='mytext'>Summer Collection</div>
                    <div className='myprice'><div className='firstprice'>1,499 </div><div className='secondprice'>$1,999</div> </div>
                </div>
                <div className='buttons'>
                    <button className='firstbutton'>Shop Now</button>
                    <button className='secondbutton'>Shop Now</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero