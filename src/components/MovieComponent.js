import React from 'react';
import {Media} from 'reactstrap';

let movieComponent =(props) => {
    
return (
    <div className="mt-3 c">
    <Media className='text-center'>
        <Media left className="mr-5">
            <br />
        <i className="fa fa-arrow-up"></i><br></br>
        <br />
        
<h1>{props.details.totalVoted}</h1>
<br />

<i className="fa fa-arrow-down"></i>

        </Media>
    <Media  href='#' >
      <img  src={props.details.poster} alt="movie-poster" className="img-fluid img-thumbnail ml-auto"style={{height:'200px',width:'150px'}}/>
    </Media>
    <Media body middle >
      <Media heading>
        <p style={{textAlign:'start',marginLeft:'1em'}}>{props.details.title}</p>
      </Media>
    <ul>
<li>Genre: {props.details.genre}</li>
<li>Director: {props.details.director}</li>
<li>Starring: {props.details.genre}</li>
<li>released date: {props.details.releasedDate}</li>
<li><p className="text-primary">{props.details.pageViews} views | voted by {props.details.totalVoted} people</p></li>
    </ul>
    </Media>
  </Media>
  </div>
)
}

export default movieComponent