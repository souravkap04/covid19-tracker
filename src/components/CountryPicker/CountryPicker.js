import React, { useState , useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from "./CountryPicker.module.css";
import {countries} from '../../api';

const CountryPicker = ({handleCountryChange}) => {
    const [countriesData , setCountriesData]=useState([]);
    useEffect(()=>{
        const fetchCountriesData = async ()=>{
            setCountriesData(await countries());
            console.log("countryApi",countriesData);
        }
        fetchCountriesData();
    },[])
    return ( <div className={styles.fromcontrol}>
        <FormControl>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {countriesData.map((country,i)=><option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
        
    </div> );
}
 
export default CountryPicker;