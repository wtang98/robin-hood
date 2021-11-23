import React, {useState, useEffect} from 'react'
import './stats.scss'
import Statsrows from './statsrows/statsrows';

const Stats = (props) => {
    const {myStocks, stockData} = props

    return (
        <div className="stats">
            <div className="stats__container">
                <div className="stats__container-header stats__container-stocks">
                    <p>Stocks</p>
                </div>
                <div className="stats__container-content">
                    <div className="stats__container-content-rows">
                    {myStocks.map((stock) => (
                        <Statsrows
                            key={stock.data.ticker}
                            name={stock.data.ticker}
                            openPrice={stock.info.o}
                            shares={stock.data.shares}
                            price={stock.info.c}
                        />
                    ))}
                    </div>
                </div>
                <div className="stats__container-header stats__container-list">
                    <p>Lists</p>
                </div>
                <div className="stats__container-content">
                    <div className="stats__container-content-rows">
                    {stockData.map((stock) => (
                        <Statsrows
                            key={stock.name}
                            name={stock.name}
                            openPrice={stock.o}
                            price={stock.c}
                        />
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
