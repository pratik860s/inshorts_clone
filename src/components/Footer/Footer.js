import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
        <span className='name'>
            Inshorts Clone made by-{" "}
            <a href='https://www.linkedin.com/in/pratik860' target='__blank'>Pratik Sharma</a>
        </span>
        <hr style={{width:"90%"}}/>
        <div className='iconContainer'>
        <a href='https://www.instagram.com/_pratik.me' target='__blank'><i className='fab fa-instagram-square fa-2x'></i></a>
        <a href='https://www.linkedin.com/in/pratik860' target='__blank'><i className='fab fa-linkedin fa-2x'></i></a>
        <a href='https://pratikjsx.netlify.app/' target='__blank'><i className='fas fa-link fa-2x'></i></a>
        </div>
    </div>
  )
}

export default Footer