import React, { useState} from 'react'
import { Form, Button} from 'react-bootstrap'
import { addToAlreadyWatched, addToCurrentlyWatching, addToWantToWatch, uploadSeries, updateEntry } from '../services/allAPI';
import { toast,ToastContainer } from 'react-toastify';
function Add({setUploadSeriesServerResponse}) {
   
    const [series,setSeries] = useState({
        id:"",title:"",genre:"",category:"",language:"",plot:"",imageUrl:""
    })
    console.log(series);
    const handleUpload = async (e)=>{
       e.preventDefault()
        const {title,genre,category,language,plot,imageUrl} = series
        if(!title || !genre || !category || !language || !plot || !imageUrl){
            alert("Please fill the form completely!")
        }else{
         // make api call
         
        const response = await uploadSeries(series)
        console.log(response);
        setUploadSeriesServerResponse(response.data)
        alert(`'${title}' added successfully!`)
        if(category == "Already Watched"){
          
          // setSeries({...series,id:newId})
          await addToAlreadyWatched(series)
        }else if(category == "Currently Watching"){
          // setSeries({...series,id:newId})
         const test = await addToCurrentlyWatching(series)
         console.log(test);
        }else{
          // setSeries({...series,id:newId})
          const watch = await addToWantToWatch(series)
          console.log(watch);
        }
        setSeries({
          id:"",title:"",genre:"",category:"",language:"",plot:"",imageUrl:""
      })
        }
        

    }
  

  return (
    
    <>
        <Form onSubmit={handleUpload} style={{backgroundColor:'#ECBA94'}} className='border border-secondary rounded p-5 w-50  ms-5'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Series ID"  onChange={(e)=>setSeries({...series,id:e?.target.value})}
         />
      </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Title of the Series"  onChange={(e)=>setSeries({...series,title:e?.target.value})}
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Genre" onChange={(e)=>setSeries({...series,genre:e.target.value})}
       />
      </Form.Group>
      {[ 'radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3 text-black">
          <Form.Check onChange={(e)=>setSeries({...series,category:"Already Watched"})} 
            inline 
            value="Already Watched"
            label="Already Watched"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
         
          <Form.Check onChange={(e)=>setSeries({...series,category:"Currently Watching"})} 
            inline
            label="Currently Watching"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
         
          <Form.Check  onChange={(e)=>setSeries({...series,category:"Want To Watch"})} 
            inline
            label="Want To Watch"
            name="group1"
            type={type}
            id={`inline-${type}-3`}
          />
        </div>
        
      ))}
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Language" onChange={(e)=>setSeries({...series,language:e.target.value})}
       />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Plot" onChange={(e)=>setSeries({...series,plot:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Series Poster Image URL" onChange={(e)=>setSeries({...series,imageUrl:e.target.value})}/>
      </Form.Group>
      <Button type='submit'>Add Entry</Button>

      
      
          </Form>
          <ToastContainer position='top-center' theme='colored' autoClose={2000}/>

    </>
  )
}

export default Add