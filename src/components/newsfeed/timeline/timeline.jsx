import React from 'react'
import './timeline.scss'

const Timeline = () => {
    return (
        <div className="timeline">
            <div className="timeline__buttons">
                <div className="timeline__buttons-button">LIVE</div>
                <div className="timeline__buttons-button">1D</div>
                <div className="timeline__buttons-button active">1W</div>
                <div className="timeline__buttons-button">3M</div>
                <div className="timeline__buttons-button">3Y</div>
                <div className="timeline__buttons-button">All</div>
            </div>
        </div>
    )
}

export default Timeline
