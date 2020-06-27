import React, { useState } from 'react'


const initialState = {
    raw: '1',
    pasturised: '.5',
    creamed: '.5',
    liquid: '1',
    combHoney: '1.5',
    clover: '1.5',
    manuka: '2',
    other: '1',
    weight: '',
    givenType: 'clover',
    givenTexture: 'creamed',
    isRaw: false
}

const PriceCalculator = () => {

    const [calculatorData, setData] = useState(initialState)

    const {
        raw,
        pasturised,
        creamed,
        liquid,
        combHoney,
        clover,
        manuka,
        other,
        weight,
        givenType,
        givenTexture,
        isRaw
    } = calculatorData
    console.log(calculatorData)

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








    }


    return (
        <div className="preserve-whitespace">
            <h3 className="medium text-primary">Calculate Recommended Price</h3>
            <form className="form" >
                <div className="form-group">
                    <input
                        type="text"
                        placeholder=" Weight"
                        name="weight"
                        value={weight}
                        onChange={onChange}
                    />
                    <small className="form-text">Provide the weight of your honey</small>
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
                <button type="submit" className="btn btn-primary my-1" onSubmit={onSubmit}>Calculate</button>
            </form>

        </div>
    )
}

export default PriceCalculator
