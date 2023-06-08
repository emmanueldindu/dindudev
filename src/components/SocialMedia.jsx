import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'

import { BsLinkedin } from 'react-icons/bs'
const SocialMedia = () => (

      <div className='app__social'>
          <div className="">
             
            
            <a href="https://twitter.com/bettertimes_web">
                

              <BsTwitter />
               </a>
              
          </div>
        <div>
            <a href="https://www.linkedin.com/in/emmadindu/">


              <BsLinkedin />
            </a>
          </div>
          <div>
              <BsInstagram />
          </div>
    </div>
  
)

export default SocialMedia
 