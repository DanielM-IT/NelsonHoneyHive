import React from 'react'
import { Link } from 'react-router-dom'
import SupportForm from '../forms/SupportForm'


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-grid">
                <div className="footer-support">
                    <h4 className="medium footer-header">Contact Support</h4>
                    <SupportForm />
                </div>
                <div>
                    <h4 className="small footer-header">NEED HELP?</h4>
                    <ul>
                        <li>Call Us: <br />(03) 876-0000 <br />0800 564 876</li><br />
                        <li>General Inquiries: <br />nelsonhoneyhiveinfo@gmail.com</li><br />
                        <li>Sales: <br />nelsonhoneyhivesales@gmail.com </li>
                    </ul>
                </div>
                <div>
                    <h4 className="small footer-header">Navigate</h4>
                    <div className="grid-2">
                        <div>
                            <ul>
                                <li className="my">
                                    <Link to='/' className="text-secondary">Home  ›</Link>
                                </li>
                                <li>
                                    <Link to='/profiles' className="text-secondary">Suppliers  ›</Link>
                                </li>
                                <li className="my">
                                    <Link to='/posts' className="text-secondary">Community  ›</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className="my">
                                    <Link to='/support' className="text-secondary">Support  ›</Link>
                                </li>
                                <li>
                                    <Link to='/auctions' className="text-secondary">Browse Store  ›</Link>
                                </li>
                                <li className="my">
                                    <Link to='/account' className="text-secondary">My Hive  ›</Link>
                                </li>
                            </ul>
                        </div >

                    </div >
                </div >
            </div >
            <hr />
            <div>
                <p className="col-sm">
                    &copy;{new Date().getFullYear()} Nelson Honey Hive | All rights reserved | Terms of service | Privacy
                </p>
            </div>
        </div >
    )
}

export default Footer
