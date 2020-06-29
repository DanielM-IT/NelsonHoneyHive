import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createProfile, getCurrentProfile } from '../../actions/profile'

const initialState = {
    company: '',
    website: '',
    location: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
    errors: {}
}

const ProfileForm = ({
    profile: { profile, loading },
    createProfile,
    getCurrentProfile,
    history
}) => {
    const [formData, setFormData] = useState(initialState)

    const [displaySocialInputs, toggleSocialInputs] = useState(false)

    useEffect(() => {
        if (!profile) getCurrentProfile()
        if (!loading && profile) {
            const profileData = { ...initialState }
            for (const key in profile) {
                if (key in profileData) profileData[key] = profile[key]
            }
            for (const key in profile.social) {
                if (key in profileData) profileData[key] = profile.social[key]
            }
            setFormData(profileData)
        }
    }, [loading, getCurrentProfile, profile])

    const {
        company,
        website,
        location,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram,
        errors
    } = formData

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()
        if (validateForm()) {
            createProfile(formData, history, profile ? true : false)
        }
    }

    function validateForm() {
        let fields = formData
        let errors = {}
        let formIsValid = true

        if (!fields["company"].match(/^[a-zA-Z1-9]*$/)) {
            formIsValid = false
            errors["company"] = "*Please enter alphabet characters or numbers only."
        }

        if (!fields["website"].match(/(^http[s]?:\/{2})|(^www)|(^\/{1,2})/)) {
            formIsValid = false
            errors["website"] = "*Please enter a valid website url."
        }

        if (!fields["location"].match(/^[a-zA-Z1-9]*$/)) {
            formIsValid = false
            errors["location"] = "*Please enter alphabet characters or numbers only."
        }

        setFormData({ ...formData, errors: errors })

        return formIsValid
    }

    return (
        <Fragment>
            <div className="add-pg-padding">
                <h1 className="large text-dark">Edit Your Profile</h1>
                <p className="lead text-dark">
                    <i className="fas fa-user" /> Add some changes to your profile
                </p>
                <form className="form" onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Company name"
                            name="company"
                            value={company}
                            onChange={onChange}
                        />
                        <small className="form-text">
                            Could be your own company or one you work for
                        </small>
                        <div className='error-message'>{formData.errors.company}</div>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Website"
                            name="website"
                            value={website}
                            onChange={onChange}
                        />
                        <small className="form-text">
                            Could be your own or a company website
                    </small>
                        <div className='error-message'>{formData.errors.website}</div>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Location"
                            name="location"
                            value={location}
                            onChange={onChange}
                        />
                        <small className="form-text">
                            City and/or state
                        </small>
                        <div className='error-message'>{formData.errors.location}</div>
                    </div>
                    <div className="form-group">
                        <textarea
                            placeholder="A short bio of yourself and your company"
                            name="bio"
                            value={bio}
                            onChange={onChange}
                        />
                        <small className="form-text">Tell us a little about yourself</small>
                    </div>
                    <div className="my-2">
                        <button
                            onClick={() => toggleSocialInputs(!displaySocialInputs)}
                            type="button"
                            className="btn btn-green"
                        >
                            Add Social Network Links
                        </button>
                        <span>Optional</span>
                    </div>
                    {displaySocialInputs && (
                        <Fragment>
                            <div className="form-group social-input">
                                <i className="fab fa-twitter fa-2x" />
                                <input
                                    type="text"
                                    placeholder="Twitter URL"
                                    name="twitter"
                                    value={twitter}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="form-group social-input">
                                <i className="fab fa-facebook fa-2x" />
                                <input
                                    type="text"
                                    placeholder="Facebook URL"
                                    name="facebook"
                                    value={facebook}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="form-group social-input">
                                <i className="fab fa-youtube fa-2x" />
                                <input
                                    type="text"
                                    placeholder="YouTube URL"
                                    name="youtube"
                                    value={youtube}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="form-group social-input">
                                <i className="fab fa-linkedin fa-2x" />
                                <input
                                    type="text"
                                    placeholder="Linkedin URL"
                                    name="linkedin"
                                    value={linkedin}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="form-group social-input">
                                <i className="fab fa-instagram fa-2x" />
                                <input
                                    type="text"
                                    placeholder="Instagram URL"
                                    name="instagram"
                                    value={instagram}
                                    onChange={onChange}
                                />
                            </div>
                        </Fragment>
                    )}
                    <input type="submit" className="btn btn-primary my-1" />
                    <Link className="btn btn-light my-1" to="/account">
                        Go Back
                    </Link>
                </form>
            </div>
        </Fragment>
    )
}

ProfileForm.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
    ProfileForm
)