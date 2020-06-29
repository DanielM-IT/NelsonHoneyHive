import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="grid-3">
                <div className="col">
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                    </ul>
                </div>
                <div className="col">
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                    </ul>
                </div>
                <div className="col">
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="col">
                <p className="col-sm">
                    &copy;{new Date().getFullYear()} Nelson Honey Hive | All rights reserved | Terms of service | Privacy
                </p>
            </div>
        </div>
    )
}

export default Footer
