import React from 'react'
import './newsfeed.scss'
import Linegraph from './linegraph/linegraph'
import Timeline from './timeline/timeline'
import Chip from './chip/chip'
import { Avatar } from '@material-ui/core'

const Newsfeed = () => {
    
    const popularTopics = [
        "Technology",
        "Top Movies",
        "Upcoming Earnings",
        "Crypto",
        "Cannabis",
        "Healthcare Supplies",
        "Index ETFs",
        "Technology",
        "China",
        "Pharma",
    ]

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
                        <Timeline/>
                    </div>
                    <div className="newsfeed__container-charts-buyingPower">
                        <h2>Buying Power</h2>
                        <h2>$420.69</h2>
                    </div>
                    <div className="newsfeed__container-charts-marketNews">
                        <div className="newsfeed__container-charts-marketNews-marketBox">
                            <p>Market Closed</p>
                            <h1>Happy Thanksgiving</h1>
                        </div>
                    </div>
                    <div className="newsfeed__container-charts-popularSection">
                        <div className="newsfeed__container-charts-popularSection-popular">
                            <h1>Popular lists</h1>
                            <p>Show More</p>
                        </div>
                        <div className="newsfeed__container-charts-popularSection-chips">
                            {popularTopics.map((topic)=>(
                                <Chip
                                    label={topic}
                                    image={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsfeed
