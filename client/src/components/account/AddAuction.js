import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import { createAuction } from '../../actions/auction'
import PriceCalculator from './PriceCalculator'


const initialState = {
    listingname: '',
    description: '',
    imageurl: '',
    enddate: '',
    startbid: '',
    currentprice: '',
    reserve: '',
    shipping: '',
    seller: '',
    auctionLength: '7',
    errors: {}
}

const AddAuction = ({
    auction: { singleAuction, loading },
    createAuction,
    auth: { user },
    history
}) => {
    const [formData, setFormData] = useState(initialState)
    const {
        listingname,
        description,
        imageurl,
        enddate,
        startbid,
        currentprice,
        reserve,
        shipping,
        seller,
        auctionLength,
        errors
    } = formData

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()
        if (validateForm()) {
            if (formData.reserve >= formData.startbid) {
                formData.currentprice = formData.startbid
                formData.seller = user._id
                formData.enddate = moment().add(auctionLength, 'days').toDate()
                createAuction(formData, history)
            }
            else
                window.alert("Reserve must be greater than or equal to the starting bid.")
        }
    }

    function validateForm() {
        let fields = formData
        let errors = {}
        let formIsValid = true

        if (!fields["listingname"]) {
            formIsValid = false
            errors["listingname"] = "*Please enter a listing name."
        }
        if (typeof fields["listingname"] !== "undefined") {
            if (!fields["listingname"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false
                errors["listingname"] = "*Please enter alphabet characters only."
            }
        }

        if (!fields["description"]) {
            formIsValid = false
            errors["description"] = "*Please enter a description."
        }

        if (!fields["startbid"]) {
            formIsValid = false
            errors["startbid"] = "*Please enter a starting bid."
        }

        if (typeof fields["startbid"] !== "undefined") {
            if (!fields["startbid"].match(/^[1-9]\d*(\.\d+)?$/)) {
                formIsValid = false
                errors["startbid"] = "*Please enter numeric values and decimals only."
            }
        }

        if (!fields["reserve"]) {
            formIsValid = false
            errors["reserve"] = "*Please enter a reserve."
        }

        if (typeof fields["reserve"] !== "undefined") {
            if (!fields["reserve"].match(/^[1-9]\d*(\.\d+)?$/)) {
                formIsValid = false
                errors["reserve"] = "*Please enter numeric values and decimals only."
            }
        }

        if (!fields["shipping"]) {
            formIsValid = false
            errors["shipping"] = "*Please enter shipping costs."
        }

        if (typeof fields["shipping"] !== "undefined") {
            if (!fields["shipping"].match(/^[1-9]\d*(\.\d+)?$/)) {
                formIsValid = false
                errors["shipping"] = "*Please enter numeric values and decimals only."
            }
        }

        setFormData({ ...formData, errors: errors })

        return formIsValid
    }

    return (
        <Fragment>
            <div className="auctions-grid-3 add-pg-padding">
                <div className="auctions-grid-4">
                    <h1 className="large text-dark">Create Your Listing</h1>
                    <form className="form" onSubmit={onSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Listing name"
                                name="listingname"
                                value={listingname}
                                onChange={onChange}
                            />
                            <small className="form-text">Name of your listing</small>
                            <div className='error-message'>{formData.errors.listingname}</div>
                        </div>
                        <div className="form-group">
                            <textarea
                                className="textarea"
                                placeholder="Description"
                                name="description"
                                value={description}
                                onChange={onChange}
                            />
                            <small className="form-text">Give your listing  a description</small>
                            <div className='error-message'>{formData.errors.description}</div>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Starting bid"
                                name="startbid"
                                value={startbid}
                                onChange={onChange}
                            />
                            <small className="form-text">Give your listing a starting price</small>
                            <div className='error-message'>{formData.errors.startbid}</div>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Reserve price"
                                name="reserve"
                                value={reserve}
                                onChange={onChange}
                            />
                            <small className="form-text">Give your listing a reserve price</small>
                            <div className='error-message'>{formData.errors.reserve}</div>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Shipping"
                                name="shipping"
                                value={shipping}
                                onChange={onChange}
                            />
                            <small className="form-text">Provide the shipping costs of your listing</small>
                            <div className='error-message'>{formData.errors.shipping}</div>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Image URL"
                                name="imageurl"
                                value={imageurl}
                                onChange={onChange}
                            />
                            <small className="form-text">
                                Enter the url of your image
                            </small>
                        </div>
                        <div className="form-group">
                            <select name="auctionLength" value={auctionLength} onChange={onChange}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                            </select>
                            <small className="form-text"
                            >Select the length of your auction in days
                            </small>
                        </div>
                        <input type="submit" className="btn btn-primary my-1" />
                        <Link className="btn btn-light my-1" to="/account">
                            Go Back
                        </Link>
                    </form>
                </div>
                <div className="auctions-grid-4 p-3 m-3">
                    <PriceCalculator />
                </div>
            </div>
        </Fragment >
    )
}

AddAuction.propTypes = {
    createAuction: PropTypes.func.isRequired,
    auction: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    auction: state.auction
})

export default connect(mapStateToProps, { createAuction })(AddAuction)
