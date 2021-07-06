import React, { useEffect, useState } from 'react';
import "./Results.css";
import VideoCard from './VideoCard';
import axios from './axios';
import requests from './requests';
import FlipMove from 'react-flip-move'

function Results({selectedOption}) {
    const [movies, setMovies] = useState([]);



    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(selectedOption); 
            setMovies(request.data.results);
            return request;
            //console.log(request);

        }
        fetchData();
    }, [selectedOption])


    return (
        <div className="results">  

        <FlipMove>

            {movies.map((movie) => (
            <VideoCard movie key={movie.id } movie = {movie}/>
            ))}
        </FlipMove>


            
        </div>
    );
}

export default Results;
