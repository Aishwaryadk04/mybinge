import React, { useEffect, useState } from 'react'
import { deleteWantToWatch, getAllWantToWatch, addToCurrentlyWatching } from '../services/allAPI'
import './alreadywatched.css'
import { toast, ToastContainer } from 'react-toastify'

function WatchList() {
    const [WatchList,setWatchList] = useState([])
    const handleWatchList = async ()=>{
        // make api call
        const {data} = await getAllWantToWatch()
        setWatchList(data);
    }
    useEffect(()=>{
        handleWatchList()
    },[])
   const deleteWatch = async (id)=>{
    // make api call
    try{ await deleteWantToWatch(id)
    const newWatch = WatchList.filter((series)=>{
      return series.id !== id; 
    })
    // get remaining series
    setWatchList(newWatch)
  }catch(error){
    console.error('Error deleting the series', error)
  }
   }

   const handleUpdate = async (id) => {
    try {
      const movetoWC = WatchList.find((series) => series.id === id);

      if (movetoWC) {
        // Update the category to "Already Watched"
        movetoWC.category = 'Already Watched';

        // Make the API call to add to Already Watched
        console.log(movetoWC);
        await addToCurrentlyWatching(movetoWC);
        
        toast.success(`Yay! You started watching '${movetoWC.title}'. Find the details in the currently watching category! `)
        deleteWatch(id)
      }
    } catch (error) {
      console.error('Error updating series:', error);
      // Handle errors as needed
    }
  };

  return (
    <>
    <h1 className='mt-5 ms-5'>Series you've on your watch list!</h1>
    <h6 style={{marginLeft:'50px', fontWeight:'bold', marginTop:'-10px'}}>( Hover for Series Details! )</h6>

    <div className="parallax p2">
    { WatchList?.length>0?
        WatchList.map((item)=>(
          <div className="mycard">
          <div className="mycard-img">
              <img src={item.imageUrl} alt=""/>
          </div>
          <div className="mycard-content">
              <p>
                <h6>Name :<span> {item.title}</span></h6>
              <h6>Genre : <span>{item.genre}</span></h6>
              <h6>Language : <span>{item.language}</span></h6>
              <h6>Plot :<span> {item.plot.slice(0,150)}...</span></h6>
              <button onClick={()=>deleteWatch(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
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

export default WatchList