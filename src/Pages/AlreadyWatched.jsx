import React, { useEffect, useState } from 'react'
import { deleteAlreadyWatched, getAllAlreadyWatched } from '../services/allAPI';
import './alreadywatched.css'
function AlreadyWatched() {
   const [watched, setWatched] = useState([])
   const handleWatched = async ()=>{
    // make api call
    const {data} = await getAllAlreadyWatched()
    setWatched(data);
    console.log(data);
   }

   useEffect(()=>{
    handleWatched()
   },[])
   
   const deleteWatched = async (id)=>{
    // make api call
    try { await deleteAlreadyWatched(id)
    const newWatched = watched.filter((series)=>{
      return series.id !== id;
    })
    // get remaining series
    setWatched(newWatched)
    }catch(error){
      console.error('Error deleting series', error);
    }
   }

  return (
    <>
    <h1 className='mt-5 ms-5'>Series you've finished watching!</h1>
    <h6 style={{marginLeft:'50px', fontWeight:'bold', marginTop:'-10px'}}>( Hover for Series Details! )</h6>

    <div className="parallax p2">
        {/* <SeriesCard watched = {watched}/> */}
        { watched?.length>0?
        watched.map((item)=>(
          <div className="mycard">
          <div className="mycard-img">
              <img src={item.imageUrl} alt=""/>
          </div>
          <div className="mycard-content">
              <p>
              <h6>Name :<span> {item.title}</span></h6>
              <h6>Genre : <span>{item.genre}</span></h6>
              <h6>Language : <span>{item.language}</span></h6>
              <h6>Plot :<span> {item.plot}</span></h6>
              <button onClick={()=>deleteWatched(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
              
              </p>
              
          </div>
          </div>
        )): <p>Nothing to Display!</p>
         
                }
    </div>
    </>
  )
}

export default AlreadyWatched