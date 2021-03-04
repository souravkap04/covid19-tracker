import React, { useState,useEffect } from 'react';
import {fetchDailyData} from '../../api';
import {Line} from 'react-chartjs-2';

const Chart = () => {
    const [dailyData,setDailyData]=useState({});
    useEffect(()=>{
        const fetchApi = async ()=>{
            setDailyData(await fetchDailyData());
            console.log(dailyData[0]);
            
        }
        fetchApi();
        
    })
    const lineChart = (
        <Line data={{
            labels:[],
            datasets:[{},{}]
        }}/>
    )
    return ( <div>
        <p>Chart</p>
    </div> );
}
 
export default Chart;