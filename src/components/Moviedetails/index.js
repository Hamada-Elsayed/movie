import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './index.scss'
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Moviedetails = () => {
  const [movie,setmovie] = useState([]); 
  const param = useParams();

  console.log(param)

  const getmoviedetails = async()=>{
    const result = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=95c1b28e62b192ec7159d7c369ec63f1&language=en-US`)
    setmovie(result.data)
  }

  useEffect(()=>{
    getmoviedetails();
  },)



  return (
    <div>
      <Container className='container'>
          <div key={movie.id} className='details-page'>
          <img src={`https://image.tmdb.org/t/p/w400/`+ movie.poster_path} alt='#' />
          <div className='midell'>
              <h3>{movie.original_title}</h3>
              <p>{movie.overview}</p>
          </div>
        </div>




      </Container>

      
    </div>
  )
}

export default Moviedetails
