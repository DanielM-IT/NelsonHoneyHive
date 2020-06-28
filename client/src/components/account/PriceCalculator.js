import React, { useState } from 'react'


const initialState = {
    weight: 0,
    givenType: 'clover',
    typePrice: 0,
    givenTexture: 'creamed',
    texturePrice: 0,
    isRawPrice: 0,
    isRaw: false,
    recommendedReserve: '',
    recommendedStart: ''
}

const PriceCalculator = () => {

    const [calculatorData, setData] = useState(initialState)
    const [recommendedReserve, setRecReserve] = useState([])
    const [recommendedStart, setRecStart] = useState([])

    let {
        weight,
        givenType,
        typePrice,
        givenTexture,
        texturePrice,
        isRawPrice,
        isRaw,
    } = calculatorData

    function honeyType(givenType) {
        switch (givenType) {
            case 'clover':
                return typePrice = typePrice + 1.50
            case 'manuka':
                return typePrice = typePrice + 2.00
            case 'other':
                return typePrice = typePrice + 1.00
            default:
                return null
        }
    }
    function honeyTexture(givenTexture) {
        switch (givenTexture) {
            case 'creamed':
                return texturePrice = texturePrice + .50
            case 'liquid':
                return texturePrice = texturePrice + 1.00
            case 'comb':
                return texturePrice = texturePrice + 1.50
            default:
                return null
        }
    }
    function honeyRaw(isRaw) {
        switch (isRaw) {
            case true:
                return isRawPrice = isRawPrice + 1.00
            case false:
                return isRawPrice = isRawPrice + .50
            default:
                return null
        }
    }

    const handleCheckBoxClick = e => {
        setData((prevState) => {
            return {
                ...calculatorData,
                isRaw: !prevState.isRaw
            }
        })
    }

    const onChange = e =>
        setData({ ...calculatorData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault()
        honeyType(givenType)
        honeyTexture(givenTexture)
        honeyRaw(isRaw)

        const price = typePrice + texturePrice + isRawPrice
        const reserveTotal = (Math.round(((weight / 100) * price) * 100) / 100).toFixed(2)
        const startTotal = (Math.round((reserveTotal - (reserveTotal * .15)) * 100) / 100).toFixed(2)
        console.log(startTotal)
        setRecStart([])
        setRecReserve([])
        setRecStart(recommendedStart => [...recommendedStart, startTotal])
        setRecReserve(recommendedReserve => [...recommendedReserve, reserveTotal])
    }


    return (
        <div className="preserve-whitespace">
            <h3 className="medium text-primary">Calculate Recommended Price</h3>
            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder=" Weight"
                        name="weight"
                        value={weight}
                        onChange={onChange}
                    />
                    <small className="form-text">Provide the weight of your honey in grams</small>
                </div>
                <div className="form-group">
                    <select
                        name="givenType"
                        value={givenType}
                        onChange={onChange}
                    >
                        <option value="clover">Clover</option>
                        <option value="manuka">Manuka</option>
                        <option value="other">Other</option>
                    </select>
                    <small className="form-text"
                    >Select your honey type
                            </small>
                </div>
                <div className="form-group">
                    <select
                        name="givenTexture"
                        value={givenTexture}
                        onChange={onChange}
                    >
                        <option value="creamed">Creamed</option>
                        <option value="liquid">Liquid</option>
                        <option value="combHoney">Comb Honey</option>
                    </select>
                    <small className="form-text"
                    >Select your honey texture
                    </small>
                </div>
                <div className="form-group">
                    <label>Raw  </label>
                    <input type="checkbox" id="isRaw" name="isRaw" value="isRaw" onChange={handleCheckBoxClick} />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary my-1">Calculate</button>
                </div>
                <div>
                    <h4 className="small text-primary"><br />Recommended Start Price:         ${recommendedStart}</h4>
                </div>
                <div>
                    <h4 className="small text-primary">Recommended Reserve Price:   ${recommendedReserve}</h4>
                </div>
            </form>

        </div>
    )
}

export default PriceCalculator
