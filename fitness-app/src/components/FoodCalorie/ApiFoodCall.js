import React,{useEffect,useState} from 'react';
import axios from "axios";
import FoodCalorie from './FoodCalorie';
const ApiFoodCall = ({searchvalue}) => {
const [caloriedata,setcaloriedata]=useState([])

    function datas(){

    const options = {
      method: 'GET',
      url: 'https://food-calorie-data-search.p.rapidapi.com/api/search',
      params: {keyword: searchvalue},
      headers: {
        'x-rapidapi-host': 'food-calorie-data-search.p.rapidapi.com',
        'x-rapidapi-key': '13138edc67msh6c745817d45f126p147e10jsna2342d12db97'
      }
    };
    
    axios.request(options).then(function (response) {
        setcaloriedata(response.data);

    }).catch(function (error) {
        console.error(error);
    });
}
useEffect(()=>{
    datas();
},[searchvalue])
    return(
        <FoodCalorie caloriedata={caloriedata}/>

  )
};

export default ApiFoodCall;
