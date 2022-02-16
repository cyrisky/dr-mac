import React from 'react'
import { Link } from 'react-router-dom'

const Masthead = () => {
    return (
        <header class="masthead">
        <div class="container">
            <div class="masthead-subheading">Welcome Players!</div>
            <div class="masthead-heading text-uppercase">It's Nice To Meet You</div>
            <Link to="/profile">
            <a class="btn btn-primary btn-xl text-uppercase">Go To Your Profile</a> 
            </Link>
            
        </div>
    </header>
    )
}

export default Masthead