import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import List from '../components/List';
import Add from '../components/Add';

function MyList() {
const [uploadSeriesServerResponse,setUploadSeriesServerResponse] = useState({})
  return (
    <>
    <h1 className='container  mt-5'>START BY ADDING SERIES DETAILS HERE!</h1>
      <div className='add container  mt-3 mb-5 d-flex justify-content-between align-items-center'>
        
         <Add setUploadSeriesServerResponse = {setUploadSeriesServerResponse} />
          <div className=''>
            <img className='rounded' src="https://media3.giphy.com/media/LkT2g5bbsd5OEc9aCB/giphy.gif?cid=6c09b9526uzycp8xcbctj74fufl4pabcwzgm2vbwt9gwzdxz&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="" />
          </div>
      </div>
      <List uploadSeriesServerResponse={uploadSeriesServerResponse} />
        <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </>
  )
}

export default MyList