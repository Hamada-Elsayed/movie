import React from 'react'
import './index.scss'
import { Button } from 'react-bootstrap';
import axios from 'axios';

const Landing = ({setmoviedata,getmovies,setpagecount}) => {

  const search = async(word)=>{
    if(word === ''){
      getmovies();
    } else {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=95c1b28e62b192ec7159d7c369ec63f1&query=${word}&language=en-US&page=1&include_adult=false`)
      setmoviedata(res.data.results)
      setpagecount(res.data.total_results)
    }
  }

  const onsearch = (wor)=> {
    search(wor)
  }
  return (
    <div className='landing'>
      <div>
            <div className='landing-text'>
                <h3>welcome.</h3>
                <p>search and discover your favorite movie</p>
            </div>
            <div className='landing-search'>
            <input type='search' id='search' placeholder='search here '
            onChange={(e)=>{onsearch(e.target.value)}}
            />
            <Button className='btn'>search</Button>
            </div>
      </div>
    </div>
    
  )
}

export default Landing;
