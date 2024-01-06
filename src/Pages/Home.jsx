import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigatebyUrl = useNavigate()
  return (
    <>
     <Row style={{marginTop:'100px'}} className='  mb-5 align-items-center justify-content-between w-100'>
      <Col></Col>
       <Col lg={4} className='welcome' >
         <h1 style={{fontSize:'70px'}}>Welcome To <span className='text-danger fw-bolder'>myBinge</span></h1> 
         <p style={{textAlign:'justify'}} className='fs-4'>Dive into the world of television with <span className='text-danger'>myBinge</span>, your personal space to reflect on and share your thoughts about your favorite TV shows. Whether you're an avid binge-watcher or a casual viewer, this site is designed to capture your experiences and musings as you navigate the vast landscape of television series.</p>
       </Col>
      <Col></Col>
      <Col></Col>
       <Col lg={5} className="image" >
        <img className='img-fluid rounded w-75' src="https://i.pinimg.com/originals/2b/03/45/2b03451fd8e1882905ee4cbc30131263.gif" alt="" />
       </Col>
     </Row>
<div className='container border border-black rounded p-4'>
  <h2 style={{textAlign:'center',color:'green', fontWeight:'bold'}}>Start your<button onClick={()=>navigatebyUrl('/mylist')} className='btn fs-2 fw-bold'>myBinge</button>today and embark on a journey of storytelling, emotion, and connection. Happy watching! 🍿📺✨</h2>
  </div>
     <div className='container mt-5 p-3'>
      <h2 className='fs-1 fw-bold mt-5'>What We Offer: </h2>
      <ul className='fs-4'>
        <li className='mt-4'>📝<span style={{color:'teal', fontWeight:'bold', fontSize:'30px'}}> Journal Your Journey</span> <br />
        Create personalized journal entries for each TV show you watch. Share your initial impressions, track your thoughts episode by episode, and capture the emotional rollercoaster each show takes you on.</li>
        <hr />
        <li>📚 <span style={{color:'teal', fontWeight:'bold', fontSize:'30px'}}>Build Your Watchlist</span> <br />
Use TV Show Journal to curate your watchlist. Keep track of shows you plan to watch, those you're currently enjoying, and even those you've completed. Your watchlist is your personalized guide through the ever-expanding universe of TV series.</li>
       <hr />
        <li>🌟 <span style={{color:'teal', fontWeight:'bold', fontSize:'30px'}}>Explore Your TV Show Timeline </span><br />
Relive your TV show journey through a visual timeline. Each journal entry contributes to a dynamic timeline that showcases your evolving tastes and the diverse array of shows that have left their mark on you.
        </li>
      </ul>
     </div>
    </>
  )
}

export default Home