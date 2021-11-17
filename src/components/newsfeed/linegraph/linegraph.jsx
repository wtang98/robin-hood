import React, {useEffect, useState} from 'react'
import './linegraph.scss'
import { Line } from "react-chartjs-2";

const Linegraph = () => {
    const [xData, setXData] = useState([]);
    const [yData, setyData] = useState([]);


    const data = {
        labels: xData,
        datasets: [
            {
                label: '$',
                data: yData,
                fill: false,
                backgroundColor: "black",
                borderColor:"#5ac53b",
                borderWidth:2,
                pointBorderColor: "rgba(0,0,0,0)",
                pointBackgroundColor: "rgba(0,0,0,0)",
                pointHoverBackgroundColor: "#5ac53b",
                pointHoverBorderColor:"#000000",
                pointHoverBorderWidth:4,
                pointHoverRadius:6,
            },
        ],
    }

    // const options = {
    //     plugins: {
    //         legend: {
    //             display: false
    //         }
    //     },
    //     // legend: {
    //     //     display:false
    //     // },
    //     tooltips: {
    //         mode: "index",
    //         intersect: false
    //     },
    //     scales: {
    //         x : [{
    //             display: false,
    //             type: "time",
    //             scaleFontSize: 0,
    //             time: {
    //                 format: "MM/DD/YY",
    //                 tooltipFormat: "ll",
    //             }
    //         }],
    //         y : [{
    //             ticks: {
    //                 display:false
    //             }
    //         }]
    //     }
    // }

    const createMockData = () => {
        let data = [];
        let value = 50;
        for(let i = 0; i < 365; i++){
            let date = new Date();
            // date.setHours(0,0,0,0);
            date.setDate(i);
            value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() * 10);
            data.push({x: date, y: value});
        }
        let xAxis =[];
        let yAxis =[];
        for(let i =0; i<data.length;i++){
            xAxis.push(data[i].x)
            yAxis.push(data[i].y)
        }
        for(let i =0; i<xAxis.length;i++){

        }
        setXData(xAxis)
        setyData(yAxis)
    }
    useEffect(()=> {createMockData()},[])
    return (
        <div className="linegraph">
            <Line 
                data={data}
                options = {{
                    maintainAspectRatio: false,
                    plugins: {
                        legend: true // Hide legend
                    },
                    scales: {
                        y: {
                            display: true // Hide Y axis labels
                        },
                        x: {
                            display: false // Hide X axis labels
                        }
                    }   
                }}
            />
        </div>
    )
}

export default Linegraph
