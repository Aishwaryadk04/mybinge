import React, { useEffect, useState } from 'react'
import { deleteASeries, getAllSeries } from '../services/allAPI'

function List({uploadSeriesServerResponse}) {
    const [list,setList] = useState([])
    const handleList = async ()=>{
        // make api call
        const {data} = await getAllSeries()
        setList(data)
    }

    useEffect(()=>{
        handleList()
    },[uploadSeriesServerResponse])

    const handleDeleteList = async (id)=>{
        // make api call
     try {  await deleteASeries(id)
       const newList = list.filter((series)=>{
        return series.id !== id;
       })
       
        // get remaining series
        setList(newList)
    }catch(error){
        console.error('Error deleting series', error);
    }
        
    }
  return (
    <>
        <div className="entries container mt-5">
            <h1 className='fw-bold'>Your List : </h1>
            <table className='table mt-5 mb-5 container '>
              <thead>
                <tr>
                <th style={{color:'brown'}} className='fs-3'>#</th>
                <th style={{color:'brown'}} className='fs-3'>Series Title</th>
                <th style={{color:'brown'}} className='fs-3'>Language</th>
                <th style={{color:'brown'}} className='fs-3'>Genre</th>
                <th style={{color:'brown'}} className='fs-3'>Action</th>
                </tr>
              </thead>
              <tbody>
                { list?.length>0?
                 list?.map((item,index)=>(
                  <tr  key={index} >
                  <td className='pt-3 fs-5'>{index+1}</td>
                  <td className='pt-3 fs-5'>{item?.title}</td>
                  <td className='pt-3 fs-5'>{item?.language}</td>
                  <td className='pt-3 fs-5'>{item?.genre}</td>
                  <td > <button onClick={()=>handleDeleteList(item?.id)} className='btn fs-4'><i className='fa-solid fa-trash  text-danger'></i></button></td>
                </tr>
                 )):
                 <p>NO ENTRY YET!</p>
                 }
              </tbody>
            </table>
          </div>
    </>
  )
}

export default List