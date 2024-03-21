import React from 'react'
import './pricing.css'

const pricing = () => {
    return (
        <div className="jarvis__pricing section__padding" id="price">
            <h1 className="gradient__text">Choose Your Subscription</h1>
            <div className="jarvis__pricing-cards">

                <div className="jarvis__pricing-card">
                    <h3>Premium</h3>
                    <p>$99/Annual</p>
                    <ul>
                        <li>Access to all premium features</li>
                        <li>24/7 customer support</li>
                        <li>Priority updates and improvements</li>
                    </ul>
                    <button>Subscribe Now</button>
                </div>
                <div className="jarvis__pricing-card">
                    <h3>Standard</h3>
                    <p>$49/Month</p>
                    <ul>
                        <li>Access to standard features</li>
                        <li>Customer support during business hours</li>
                        <li>Regular updates</li>
                    </ul>
                    <button>Subscribe Now</button>
                </div>
                <div className="jarvis__pricing-card">
                    <h3>Normal</h3>
                    <p>$19/Week</p>
                    <ul>
                        <li>Access to basic features</li>
                        <li>Limited customer support</li>
                        <li>Minimal updates</li>
                    </ul>
                    <button>Subscribe Now</button>
                </div>
            </div>
        </div>
    )
}

export default pricing
