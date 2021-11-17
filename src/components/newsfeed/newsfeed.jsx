import React from 'react'
import './newsfeed.scss'
import Linegraph from './linegraph/linegraph'

const Newsfeed = () => {
    return (
        <div className="newsfeed">
            <div className="newsfeed__container">
                <div className="newsfeed__container-charts">
                    <div className="newsfeed__container-charts-portfolioValue">
                        <h1>$140,000</h1>
                        <p>+$1,240</p>
                    </div>
                    <div className="newsfeed__container-charts-chart">
                        <Linegraph/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsfeed
