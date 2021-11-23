import './App.scss'
import Header from './components/header/header'
import Newsfeed from './components/newsfeed/newsfeed';
import Stats from './components/stats/stats'
import axios from 'axios';
import {db} from './jses/firebase'
import React, {useState, useEffect} from 'react';

const TOKEN = "c6ah4nqad3id24fn22ig"
const BASE_URL = "https://finnhub.io/api/v1/quote";
const App = () => {
	
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


const getStockApi = () => {
	let tempStocksData = [];
	const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "PLTR", "AMD"];
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
}

useEffect (getStockApi, [])
	return (
		<div className="app">
			<div className="app__header">
				<Header/>
			</div>
			<div className="app__body">
				<div className="app__body-container">
					<Newsfeed myStocks={myStocks}/>
					<Stats myStocks={myStocks} stockData={stockData}/>
				</div>
			</div>
		</div>
	);
}

export default App;
