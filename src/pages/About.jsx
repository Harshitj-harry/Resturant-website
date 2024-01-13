import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Typography } from '@mui/material'
import './about.css'
const About = () => {
  return (
    <Layout>
        <div className='container'>
          <h2 className='pa'>Welcome to the best food corner</h2>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident est perspiciatis delectus, 
            quae ipsum animi ipsa eius eaque consequatur similique consectetur laudantium non tempora quisquam.
            Eveniet vel necessitatibus harum minus.
          </p>
          <br />
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptatum error perferendis rerum explicabo!
             Tempore quasi unde suscipit itaque dignissimos atque modi pariatur aliquid nemo consequuntur. Autem eaque voluptatem neque.
          </p>
      
          
        </div>
    </Layout>
  )
}

export default About