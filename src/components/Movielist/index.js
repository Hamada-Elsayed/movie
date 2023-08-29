import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './index.scss'
import Pagination from '../Pagination.js';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Landing from '../Landing.js';


const Movieslist = ()=> {

  const [moviedata,setmoviedata] = useState([]);
  const[pagecount,setpagecount]=useState([]);
  console.log(moviedata);
  console.log(pagecount+1);

    //get popular movie and render it im loading page
    const getmovies = async()=> {

      const result =await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=95c1b28e62b192ec7159d7c369ec63f1&language=en-US')

      setmoviedata(result.data.results)
      setpagecount(result.data.total_pages)
    }

    const getpages = async(page)=> {

      const result = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=95c1b28e62b192ec7159d7c369ec63f1&language=en-US&page=${page}`)

      setmoviedata(result.data.results)
      setpagecount(result.data.total_pages)

    }

    useEffect(()=>{
      getmovies();
    },[])

  return (
    <>
    <Landing setpagecount={setpagecount} getmovies={getmovies} setmoviedata={setmoviedata}/>
    <div className='moviescard'>

      {
        moviedata.map((i)=>{

          return (
            <div className='moviecard' key={i.id}>
                  <img src={`https://image.tmdb.org/t/p/w400/`+i.poster_path} alt='img'/>
                  <div className='middle'>
                    <h3>{i.title}</h3>
                    <Button className='btn'>
                        <Link className='btn' to={`movie/${i.id}`}>Show details</Link>
                    </Button>
                  </div>
            </div>
          )
        })
      }
      <Pagination pagecount={pagecount} getpages={getpages}/>
    </div>
    </>
  )
}

export default Movieslist

