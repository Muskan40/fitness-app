import {useState,useEffect} from 'react'
import Exercises2 from './Exercises2';
import axios from 'axios'




const Exercises = ({search}) => {
    console.log(search)
    const[Exercise,setExercise]=useState([]);
     
    const exercise_data= async()=>{
        
    
        const options = {
            method: 'GET',
            url: `https://exercisedb.p.rapidapi.com/exercises/target/${search}`,
            headers: {
              'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
              'x-rapidapi-key': '13138edc67msh6c745817d45f126p147e10jsna2342d12db97'
            }
          };
    
     await axios.request(options).then(function (response) {
        setExercise(response.data);
        console.log(response.data)
        console.log(Exercise)
        
    }).catch(function (error) {
        console.error(error);
    });
    }
    useEffect(()=>{
        exercise_data();
    
    },[search])


    
        
      return(
        <Exercises2 Exercise={Exercise}/>
        
      )
    
      
    };

export default Exercises