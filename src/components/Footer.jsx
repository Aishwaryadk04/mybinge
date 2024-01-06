import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'100%',height:'300px', backgroundColor:'#B9AEA0'}} className='d-flex flex-column justify-content-center align-items-center '>
     <div className="footer-div d-flex justify-content-evenly w-100 flex-wrap">
      <div className="website" style={{width:'400px'}}>
        <h4 className='mb-3'><i className='fa-solid fa-cloud-arrow-up'></i>{" "}
             myBinge</h4>
             <h6 style={{textTransform:'none'}}>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</h6>
             <h6 style={{textTransform:'capitalize'}}>Code licensed Luminar, docs CC BY 3.0.</h6>
             <p>Currently v5.3.2.</p>
             </div>
             <div className="links d-flex flex-column">
              <h4 className='mb-3'>Links</h4>
              <Link to={'/'} style={{textDecoration:'none'}}>Home</Link>
              <Link to={'/mylist'} style={{textDecoration:'none'}}>My List</Link>
              <Link to={'/alreadywatched'} style={{textDecoration:'none'}}>Already Watched </Link>
              <Link to={'/currentlywatching'} style={{textDecoration:'none'}}>Currently Watching </Link>
              <Link to={'/watchlist'} style={{textDecoration:'none'}}>Watch List </Link>
             </div>
             <div className="guides d-flex flex-column">
              <h4 className='mb-3'>Guides</h4>
             <Link to={'/'} style={{textDecoration:'none'}}>React</Link>
              <Link to={'/'} style={{textDecoration:'none'}}>React Bootstrap</Link>
              <Link to={'/'} style={{textDecoration:'none'}}>Routing</Link>
             </div>
             <div className="contact">
              <h4 className='mb-3'>Contact Us</h4>
              <div className='sub d-flex mt-3'>
                <input className='form-control' type="text" placeholder='Enter your Email ID' />
                <button className='btn btn-primary ms-3'>Subscribe</button>
              </div>
             <div className='icons fs-4 d-flex justify-content-evenly mt-3'>
                <Link to={'/'} style={{textDecoration:'none'}}><i className='fa-solid fa-envelope'></i></Link>
                <Link to={'/'} style={{textDecoration:'none'}}><i className='fa-brands fa-twitter'></i></Link>
                <Link to={'/'} style={{textDecoration:'none'}}><i className='fa-brands fa-linkedin'></i></Link>
                <Link to={'/'} style={{textDecoration:'none'}}><i className='fa-brands fa-instagram'></i></Link>
                <Link to={'/'} style={{textDecoration:'none'}}><i className='fa-brands fa-github'></i></Link>
                <Link to={'/'} style={{textDecoration:'none'}}><i className='fa-brands fa-facebook'></i></Link>
             </div>
             </div>
             </div> 
             <p className='mt-3'>Copyright © 2023 Media Player. Built with React.</p>
    </div>
  )
}

export default Footer