import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './stats.scss'
import Statsrows from './statsrows/statsrows';
import { db } from '../../jses/firebase';

const TOKEN = "c6ah4nqad3id24fn22ig"
const BASE_URL = "https://finnhub.io/api/v1/quote";

const Stats = () => {
    const [stockData, setStockData] = useState([]);
    const [myStocks, setMyStocks] = useState([]);

    const getMyStocks = () => {
        db
        .collection('myStocks')
        .onSnapshot(snapshot => {
            let promises = [];
            let tempData = [];
            snapshot.docs.map((doc)=>{
                console.log(doc.data());
                promises.push(getStockData(doc.data().ticker)
                .then(response => {
                    tempData.push({
                        id:doc.id,
                        data: doc.data(),
                        info: response.data
                    })
                })
            )})
            Promise.all(promises).then(()=> {
                console.log(tempData);
                setMyStocks(tempData);
            })
        })
    }
    
    
    const getStockData = (stock) => {
        return axios
        .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
        .catch((err)=> {
            console.error("Error", err.message);
        })
    }

    useEffect (()=> {
        let tempStocksData = [];
        const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA"];
        let promises =[];
        getMyStocks();
        stocksList.map ((stock) => {
            promises.push(
                getStockData(stock)
                .then((res)=>{
                    tempStocksData.push({
                        name: stock,
                        ...res.data
                    })
                })
            )
        })
        Promise.all(promises).then(()=> {
            console.log(tempStocksData);
            setStockData(tempStocksData);
        })
    }, [])
    

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
