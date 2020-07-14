import React from 'react'

function Home (){
    return(
        <>
        <div className="container mt-5 text-center">
            <div >
                <a href="/signup">
                <button type="button" className="btn btn-block btn-outline-dark mb-5 mx-auto" style={{width: '20%',height: '80%'}}>Sign UP</button>
                </a>

                <a href="/login">
                <button type="button" className="btn btn-block btn-outline-dark mx-auto" style={{width: '20%'}}>Login</button>

                </a>
               
            </div>
       
            </div>
    
        </>

    )
}

export default Home;