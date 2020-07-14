import React from 'react';
import axios from 'axios';
import MovieComponent from '../components/MovieComponent';

//import { Redirect } from 'react-router-dom';


class Movie extends React.Component {
  
    constructor(props){
        super(props)
        this.state={
        movieList : [],
        isLoading: true
        }
    }

    componentDidMount ()  {
       const headers=   {
            'Access-Control-Allow-Origin': '*',
            
            'Content-type': 'application/json'
          }
            axios.post('/movieList',{
                
                
                category: "movies",
                language: "kannada",
                genre: "all",
                sort: "voting",
              
            },headers)
            .then(res=>{
                
                this.setState({
                    movieList: res.data.result
                })
                
                })
               
                .catch(err => console.log(err));
    }

    render(){
        if(this.props.authenticated){
        if(this.state.movieList.length===0){
            return<div>Loading......</div>
        }
        else{
            
           let movieComponents = this.state.movieList.map(movie=>{
                return <MovieComponent key={movie["_id"]} details={movie} ></MovieComponent>
            })
            return(
                <div className="container">
                        {movieComponents}
                </div>
            
               )
        }
          
        }
        else{
            return(
                <div className="container mt-5">
                <h3>You are not authenticated please login or signup appropriately</h3>
                <a href="/home">click here to login or signup</a>
            </div>
            )
          
        }
    }
}

export default Movie;