import React from 'react'
import './statsrows.scss'
import Stock from '../../../imgs/stock.svg'
import { db } from '../../../jses/firebase';

const Statsrows = (props) => {

    const percentageChange = ((props.price-props.openPrice)/props.openPrice)*100
    
    const fakeBuyStock = () => {
        db.collection('myStocks')
        .where("ticker","==", props.name)
        .get()
        .then((querySnapshot)=> {
            if(!querySnapshot.empty){
                //update stock position
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    db
                        .collection('myStocks')
                        .doc(doc.id)
                        .update({
                            shares: doc.data().shares+=1,
                        })
                    console.log(doc.id, " => ", doc.data());
                });
            }else{
                //add a new stock
                db.collection('myStocks')
                    .add({
                        ticker: props.name,
                        shares:1,
                    })
            }
        })
    }

    return (
        <div className="row" onClick={fakeBuyStock}>
            <div className="row__intro">
                <h1>{props.name}</h1>
                <p>{props.shares && (props.shares + " shares")}</p>
            </div>
            <div className="row__chart">
                <img src={Stock}
                    height={16}/>
            </div>
            <div className="row__numbers">
                <p className="row__numbers-price">{Number(props.price).toFixed(2)}</p>
                <p className={percentageChange<0 ?"row__numbers-percentageD": "row__numbers-percentageP"}>{Number(percentageChange).toFixed(2) > 0 ? "+$"+Number(percentageChange).toFixed(2) : "-$"+Number(percentageChange).toFixed(2)*-1}%</p>
            </div>
        </div>
    )
}

export default Statsrows
