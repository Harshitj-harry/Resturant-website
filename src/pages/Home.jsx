import React from 'react'
import Layout from '../components/layout/Layout'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
  return (
    <Layout>
      <div className="home"
      style={{backgroundImage:`url("	https://img.freepik.com/free-photo/chicken-wings-b…r-menu-tasty-food-top-view-flat-lay_2829-6471.jpg")`,
      backgroundRepeat:"no-repeat",
      backgroundSize:'cover'}}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p className='para'>Best Food In India</p>
          <Link  to={'/menu'}>
            <button className='button'>
              ORDER NOW
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home