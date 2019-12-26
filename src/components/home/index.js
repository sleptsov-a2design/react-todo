import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'


const Home = () => {
    return (
        <div className="home-wrap">
            <Link className="home__link" to="/TodoList">Go to Todo</Link>
        </div>
    )
}


export default Home