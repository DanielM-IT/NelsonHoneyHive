import React from 'react'
import { Link } from 'react-router-dom'


const Landing = () => {

    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="large call-to-action">Buy and Sell Quality Honey</h1>
                    <p className=" lead text-silver">
                        Create a producer profile, sell honey and bid on auctions.
                    </p>
                    <div className="buttons">
                        <Link to='/register' className="btn btn-landing">
                            Sell Honey
                        </Link>
                        <Link to='/auctions' className="btn btn-landing">
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Landing