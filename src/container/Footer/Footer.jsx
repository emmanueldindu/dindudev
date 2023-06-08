import React, {useState, useEffect} from 'react'
import './Footer.scss'
import { images } from '../../constants';
import { AppWrapper, MotionWrap } from '../../wrapper';
import { client } from '../../client';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setisFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)



  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;


    setFormData({...formData, [name]: value})
  }


  const handleSubmit = () => {
    setLoading(true);
  }
  return (
    <>
      <h2 className="head-text">Chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
<a href="mailto:emmanuelnwobodoc04@gmail.com" className='p-text'>emmanuelnwobodoc04@gmail.com</a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
<a href="mailto :emmanuelnwbodoc04@gmail.com" className='p-text'>(+234)8100491864</a>
        </div>
    
    
      </div>
    
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input type="text" className='p-text' placeholder='Your Name' value={name} />
        </div>

        <div className="app__flex">
          <input type="email" className='p-text' placeholder='Your Email' value={name} />
        </div>
        <div>
          <textarea
           className='p-text'
          
            placeholder='Your Message'
            id=""
            value={message}
            name={message}
            onChange={handleChangeInput}
            cols="30"
            rows="10"
          
          ></textarea>
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'sending' : 'send message'}</button>
    </div>
    
    </>

  )
}




export default AppWrapper(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
