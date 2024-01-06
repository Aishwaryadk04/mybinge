import React, { useEffect, useState } from 'react'
import { deleteCurrentlyWatching,  getAllCurrentlyWatching, addToAlreadyWatched, getAllAlreadyWatched } from '../services/allAPI'
import './alreadywatched.css'
import { toast, ToastContainer } from 'react-toastify'
function CurrentlyWatching() {
    const [watching, setWatching] = useState([])
    const handleWatching = async ()=>{
        // make api call
        const {data} = await getAllCurrentlyWatching()
        setWatching(data)
    }
    useEffect(()=>{
        handleWatching()
    },[])

    const deleteWatching = async (id)=>{
      // make api call
      try{ await deleteCurrentlyWatching(id)
        const newWatching = watching.filter((series)=>{
          return series.id !== id;
        })
        // get remaining series
        setWatching(newWatching)
      }catch(error){
        console.log('Error deleting the series', error);
      }
    }

    const handleUpdate = async (id) => {
      try {
        const movetoAW = watching.find((series) => series.id === id);
  
        if (movetoAW) {
          // Update the category to "Already Watched"
          movetoAW.category = 'Already Watched';
  
          // Make the API call to add to Already Watched
          console.log(movetoAW);
          await addToAlreadyWatched(movetoAW);
          
          toast.success(`Yay! You finished watching '${movetoAW.title}'. Find the details in the already watched category! `)
          deleteWatching(id)
        }
      } catch (error) {
        console.error('Error updating series:', error);
        // Handle errors as needed
      }
    };
    
    
    
    
  return (
    <>
    <h1 className='mt-5 ms-5'>Series you're currently watching!</h1>
    <h6 style={{marginLeft:'50px', fontWeight:'bold', marginTop:'-10px'}}>( Hover for Series Details! )</h6>
    <div className="parallax p2">
    { watching?.length>0?
        watching.map((item)=>(
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
              <button onClick={()=>deleteWatching(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
              <button className='btn' onClick={()=>handleUpdate(item?.id)}><i className="fa-solid fa-circle-check text-success"></i></button>
              </p>
              
          </div>
          </div>
        )): <p>Nothing to Display!</p>
         
                }
    </div>
    <ToastContainer position='top-center' theme='colored' autoClose={2000}/>

    </>
  )
}

export default CurrentlyWatching