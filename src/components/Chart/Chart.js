import React, { useState,useEffect } from 'react';
import {fetchDailyData} from '../../api';
import {Line , Bar} from 'react-chartjs-2';
import styles from "./Chart.module.css";

const Chart = ({data:{confirmed , recovered , deaths},country}) => {
    const [dailyData,setDailyData]=useState([]);
    useEffect(()=>{
        const fetchApi = async ()=>{
            setDailyData(await fetchDailyData());
            // console.log("daily data",dailyData);
            
        }
        fetchApi();
        },[])
    const lineChart = (
        dailyData.length?
        <Line data={{
            labels:dailyData.map(({date})=>date),
            datasets:[{
                data:dailyData.map(({confirmed})=>confirmed),
                label:"infected",
                borderColor:"#3333ff",
                fill:true
            },{ data:dailyData.map(({deaths})=>deaths),
            label:"dethes",
            borderColor:"red",
            backgroundColor:"rgba(250,0,0,0.5)",
            fill:true}]
        }}/> : null
        
    )
    const barChart = (
          confirmed?
          <Bar data={{
              labels:['Infected','Recovered','Deaths'],
              datasets:[{
                  data:[confirmed.value , recovered.value , deaths.value],
                  backgroundColor:[" rgba(0, 0, 250,0.5)"," rgba(0, 250, 0,0.5)"," rgba(250, 0, 0,0.5)"]
              }],
          }} 
          options={{
              labels:{display:false},
              title:{display:true,text:`Current state in ${country}`}
          }}/>: null
    )
    console.log("barChart",confirmed , recovered , deaths);
    return ( <div className={styles.container}>
        {country?barChart:lineChart}
    </div> );
}
 
export default Chart;