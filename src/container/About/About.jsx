import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import './About.scss'
import { images } from '../../constants'
import { AppWrapper } from '../../wrapper'
// import { urlFor } from '../../client'
// import { client } from '../../client'
const abouts = [
  {
    title: 'Frontend Development', description: 'I am a good Frontend Developer with a passion for building beautiful and functional web applications', imageUrl: images.about01,
  
  },

  

  { 
    title: 'Backend Development', description: 'Im a good backend developer for mobile apps. and i develop neat and functional APIs using javaScript', imageUrl: images.about03,
  
  },

  { 
    title: 'MERN Stack', description: 'I am a fullstack MERN developer', imageUrl: images.about04,
  
  },

  {
    title: 'Mobile App Developer', description: 'I develop user friendly mobile apps with ReactNative for both android and IOS mobile device', imageUrl: images.about02,
  
  },
]



const About = () => {

  // const [abouts, setAbouts] = useState([])

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';
  //   client.fetch(query).then((data) => setAbouts(data))


  
  // }, [])

  return (
    <div>
      <h2 className="head-text">
        <br />
        I know 
        <span>
<br />
          Good Apps
        <br />
        </span>
          means 

        <span>
          <br />
          Good Business
        </span>



      </h2>
      <div className="app__profiles">

        {abouts.map((about, index) => (
          <motion.div 
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}

          >
            <img src={about.imageUrl} alt={about.title}></img>
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title }</h2>
            <h2 className="p-text" style={{ marginTop: 20 }}>{about.description }</h2>
            

 </motion.div> 
))}
      </div>
    </div>
  )
}

export default AppWrapper( About, 'about' )
