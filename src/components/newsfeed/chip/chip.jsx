import React from 'react'
import './chip.scss'

const Chip = (props) => {
    const {image, label} = props
    return (
        <div className="chip">
            <div className="chip__avatar">
                <img src={image} width={10} height={10}/>
            </div>
            <div className="chip__label">
                <span>{label}</span>
            </div>
        </div>
    )
}

export default Chip
